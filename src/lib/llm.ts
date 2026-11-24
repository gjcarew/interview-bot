import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

export type LlmProvider = 'ollama' | 'github';

export interface LlmConfig {
  provider: LlmProvider;
  baseURL: string;
  apiKey: string;
  model: string;
}

type Env = Record<string, string | undefined>;

const OLLAMA_BASE_URL = 'http://localhost:11434/v1';
const OLLAMA_MODEL = 'qwen2.5:7b';
const GITHUB_BASE_URL = 'https://models.inference.ai.azure.com';
const GITHUB_MODEL = 'gpt-4o';

/**
 * Resolve LLM settings from the environment.
 * Defaults to a local Ollama server; set LLM_PROVIDER=github to use GitHub Models,
 * which also honours the legacy GITHUB_TOKEN / GITHUB_MODELS_ENDPOINT / INTERVIEW_MODEL vars.
 */
export function resolveLlmConfig(env: Env): LlmConfig {
  const provider = env.LLM_PROVIDER ?? 'ollama';

  if (provider === 'ollama') {
    return {
      provider,
      baseURL: env.LLM_BASE_URL ?? OLLAMA_BASE_URL,
      apiKey: env.LLM_API_KEY ?? 'ollama', // Ollama ignores the key, but the SDK requires one
      model: env.LLM_MODEL ?? OLLAMA_MODEL,
    };
  }

  if (provider === 'github') {
    return {
      provider,
      baseURL: env.LLM_BASE_URL ?? env.GITHUB_MODELS_ENDPOINT ?? GITHUB_BASE_URL,
      apiKey: env.LLM_API_KEY ?? env.GITHUB_TOKEN ?? 'missing-token',
      model: env.LLM_MODEL ?? env.INTERVIEW_MODEL ?? GITHUB_MODEL,
    };
  }

  throw new Error(`Unknown LLM_PROVIDER "${provider}". Use "ollama" or "github".`);
}

export const llmConfig = resolveLlmConfig(process.env);

export const llmClient = new OpenAI({
  baseURL: llmConfig.baseURL,
  apiKey: llmConfig.apiKey,
});

export const DEFAULT_MODEL = llmConfig.model;

interface ModelLister {
  models: { list: () => Promise<{ data: { id: string }[] }> };
}

export type ConnectionCheck = { ok: true } | { ok: false; message: string };

/** Verify the local Ollama server is reachable and has the configured model pulled. */
export async function checkLlmConnection(
  config: LlmConfig = llmConfig,
  client: ModelLister = llmClient,
): Promise<ConnectionCheck> {
  if (config.provider !== 'ollama') return { ok: true };

  let ids: string[];
  try {
    const page = await client.models.list();
    ids = page.data.map((m) => m.id);
  } catch {
    return {
      ok: false,
      message: `Can't reach Ollama at ${config.baseURL}. Start it with \`ollama serve\` and try again.`,
    };
  }

  const wanted = config.model.includes(':') ? [config.model] : [config.model, `${config.model}:latest`];
  if (!ids.some((id) => wanted.includes(id))) {
    return {
      ok: false,
      message: `Model "${config.model}" isn't available in Ollama. Run \`ollama pull ${config.model}\` and try again.`,
    };
  }

  return { ok: true };
}

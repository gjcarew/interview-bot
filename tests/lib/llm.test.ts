import { resolveLlmConfig, checkLlmConnection } from '../../src/lib/llm';
import type { LlmConfig } from '../../src/lib/llm';

describe('resolveLlmConfig', () => {
  it('defaults to a local Ollama server', () => {
    const config = resolveLlmConfig({});
    expect(config).toEqual({
      provider: 'ollama',
      baseURL: 'http://localhost:11434/v1',
      apiKey: 'ollama',
      model: 'qwen2.5:7b',
    });
  });

  it('lets LLM_* variables override the Ollama defaults', () => {
    const config = resolveLlmConfig({
      LLM_BASE_URL: 'http://192.168.1.5:11434/v1',
      LLM_MODEL: 'llama3.2:3b',
    });
    expect(config.baseURL).toBe('http://192.168.1.5:11434/v1');
    expect(config.model).toBe('llama3.2:3b');
  });

  it('ignores legacy GitHub variables when using Ollama', () => {
    const config = resolveLlmConfig({ GITHUB_TOKEN: 'ghp_x', INTERVIEW_MODEL: 'gpt-4o' });
    expect(config.provider).toBe('ollama');
    expect(config.model).toBe('qwen2.5:7b');
    expect(config.apiKey).toBe('ollama');
  });

  it('supports GitHub Models with the legacy variables', () => {
    const config = resolveLlmConfig({
      LLM_PROVIDER: 'github',
      GITHUB_TOKEN: 'ghp_x',
      INTERVIEW_MODEL: 'gpt-4o-mini',
    });
    expect(config).toEqual({
      provider: 'github',
      baseURL: 'https://models.inference.ai.azure.com',
      apiKey: 'ghp_x',
      model: 'gpt-4o-mini',
    });
  });

  it('rejects an unknown provider', () => {
    expect(() => resolveLlmConfig({ LLM_PROVIDER: 'bogus' })).toThrow(/LLM_PROVIDER/);
  });
});

describe('checkLlmConnection', () => {
  const ollama: LlmConfig = resolveLlmConfig({});
  type ListModels = () => Promise<{ data: { id: string }[] }>;
  const clientWith = (list: ListModels): { models: { list: ListModels } } => ({ models: { list } });

  it('passes when the configured model is available', async () => {
    const client = clientWith(async () => ({ data: [{ id: 'qwen2.5:7b' }] }));
    await expect(checkLlmConnection(ollama, client)).resolves.toEqual({ ok: true });
  });

  it('treats a bare model name as :latest', async () => {
    const client = clientWith(async () => ({ data: [{ id: 'mistral:latest' }] }));
    const config = { ...ollama, model: 'mistral' };
    await expect(checkLlmConnection(config, client)).resolves.toEqual({ ok: true });
  });

  it('tells the user to pull a missing model', async () => {
    const client = clientWith(async () => ({ data: [{ id: 'llama3.2:3b' }] }));
    const result = await checkLlmConnection(ollama, client);
    if (result.ok) throw new Error('expected check to fail');
    expect(result.message).toContain('ollama pull qwen2.5:7b');
  });

  it('tells the user to start Ollama when the server is unreachable', async () => {
    const client = clientWith(async () => {
      throw new Error('Connection error.');
    });
    const result = await checkLlmConnection(ollama, client);
    if (result.ok) throw new Error('expected check to fail');
    expect(result.message).toContain('http://localhost:11434/v1');
    expect(result.message).toContain('ollama serve');
  });

  it('skips the check for GitHub Models', async () => {
    const list = jest.fn();
    const config = resolveLlmConfig({ LLM_PROVIDER: 'github' });
    await expect(checkLlmConnection(config, { models: { list } })).resolves.toEqual({ ok: true });
    expect(list).not.toHaveBeenCalled();
  });
});

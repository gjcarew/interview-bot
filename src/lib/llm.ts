import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.GITHUB_TOKEN;
const endpoint = process.env.GITHUB_MODELS_ENDPOINT ?? 'https://models.inference.ai.azure.com';

if (!token) {
  throw new Error('GITHUB_TOKEN environment variable is required');
}

export const llmClient = new OpenAI({
  baseURL: endpoint,
  apiKey: token,
});

export const DEFAULT_MODEL = process.env.INTERVIEW_MODEL ?? 'gpt-4o';

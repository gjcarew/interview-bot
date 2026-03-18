import { Problem, Difficulty } from '../types';
import { ALL_PROBLEMS, PROBLEMS_BY_ID, PROBLEMS_BY_CATEGORY } from '../../data/problems/index';

export interface ProblemFilter {
  difficulty?: Difficulty;
  category?: string;
}

export function getProblems(filter: ProblemFilter = {}): Problem[] {
  let problems = ALL_PROBLEMS;

  if (filter.difficulty) {
    problems = problems.filter(p => p.difficulty === filter.difficulty);
  }

  if (filter.category) {
    problems = problems.filter(p => p.category === filter.category);
  }

  return problems;
}

export function getProblemById(id: string): Problem | undefined {
  return PROBLEMS_BY_ID[id];
}

export function getCategories(): string[] {
  return Object.keys(PROBLEMS_BY_CATEGORY).sort();
}

export function getRandomProblem(filter: ProblemFilter = {}): Problem | undefined {
  const pool = getProblems(filter);
  if (pool.length === 0) return undefined;
  return pool[Math.floor(Math.random() * pool.length)];
}

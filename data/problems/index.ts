import { Problem } from '../../src/types';
import {
  containsDuplicate,
  validAnagram,
  twoSum,
  groupAnagrams,
  topKFrequent,
  encodeDecodeStrings,
  productExceptSelf,
  validSudoku,
  longestConsecutiveSequence,
} from './arrays-hashing';

export const ALL_PROBLEMS: Problem[] = [
  containsDuplicate,
  validAnagram,
  twoSum,
  groupAnagrams,
  topKFrequent,
  encodeDecodeStrings,
  productExceptSelf,
  validSudoku,
  longestConsecutiveSequence,
];

export const PROBLEMS_BY_ID: Record<string, Problem> = Object.fromEntries(
  ALL_PROBLEMS.map(p => [p.id, p])
);

export const PROBLEMS_BY_CATEGORY: Record<string, Problem[]> = ALL_PROBLEMS.reduce(
  (acc, p) => {
    acc[p.category] = acc[p.category] ?? [];
    acc[p.category].push(p);
    return acc;
  },
  {} as Record<string, Problem[]>
);

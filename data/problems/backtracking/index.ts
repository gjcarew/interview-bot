import { Problem } from '../../../src/types';

export const subsets: Problem = {
  id: 'subsets',
  neetcodeId: 71,
  title: 'Subsets',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.`,
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
    },
    {
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10',
    '-10 <= nums[i] <= 10',
    'All the numbers of nums are unique.',
  ],
  functionSignature: `function subsets(nums) {\n  \n}`,
  testCases: [
    {
      input: [[1, 2, 3]],
      expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
      label: 'three elements',
    },
    {
      input: [[0]],
      expected: [[], [0]],
      label: 'single element',
    },
    {
      input: [[1, 2]],
      expected: [[], [1], [1, 2], [2]],
      label: 'two elements',
    },
    {
      input: [[1]],
      expected: [[], [1]],
      label: 'one element',
    },
  ],
};

export const combinationSum: Problem = {
  id: 'combination-sum',
  neetcodeId: 72,
  title: 'Combination Sum',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.`,
  examples: [
    {
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[2,2,3],[7]]',
      explanation: '2 and 3 are candidates, and 2+2+3=7. Note that 2 can be used multiple times. 7 is a candidate, and 7=7. These are the only two combinations.',
    },
    {
      input: 'candidates = [2,3,5], target = 8',
      output: '[[2,2,2,2],[2,3,3],[3,5]]',
    },
    {
      input: 'candidates = [2], target = 1',
      output: '[]',
    },
  ],
  constraints: [
    '1 <= candidates.length <= 30',
    '2 <= candidates[i] <= 40',
    'All elements of candidates are distinct.',
    '1 <= target <= 40',
  ],
  functionSignature: `function combinationSum(candidates, target) {\n  \n}`,
  testCases: [
    {
      input: [[2, 3, 6, 7], 7],
      expected: [[2, 2, 3], [7]],
      label: 'two combinations',
    },
    {
      input: [[2, 3, 5], 8],
      expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]],
      label: 'three combinations',
    },
    {
      input: [[2], 1],
      expected: [],
      label: 'no combinations',
    },
    {
      input: [[3], 3],
      expected: [[3]],
      label: 'exact match single element',
    },
  ],
};

export const permutations: Problem = {
  id: 'permutations',
  neetcodeId: 73,
  title: 'Permutations',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
    },
    {
      input: 'nums = [0,1]',
      output: '[[0,1],[1,0]]',
    },
    {
      input: 'nums = [1]',
      output: '[[1]]',
    },
  ],
  constraints: [
    '1 <= nums.length <= 6',
    '-10 <= nums[i] <= 10',
    'All the integers of nums are unique.',
  ],
  functionSignature: `function permute(nums) {\n  \n}`,
  testCases: [
    {
      input: [[1, 2, 3]],
      expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
      label: 'three elements - 6 permutations',
    },
    {
      input: [[0, 1]],
      expected: [[0, 1], [1, 0]],
      label: 'two elements',
    },
    {
      input: [[1]],
      expected: [[1]],
      label: 'single element',
    },
    {
      input: [[1, 2]],
      expected: [[1, 2], [2, 1]],
      label: 'two elements ordered',
    },
  ],
};

export const subsetsII: Problem = {
  id: 'subsets-ii',
  neetcodeId: 74,
  title: 'Subsets II',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.`,
  examples: [
    {
      input: 'nums = [1,2,2]',
      output: '[[],[1],[1,2],[1,2,2],[2],[2,2]]',
    },
    {
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10',
    '-10 <= nums[i] <= 10',
  ],
  functionSignature: `function subsetsWithDup(nums) {\n  \n}`,
  testCases: [
    {
      input: [[1, 2, 2]],
      expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
      label: 'array with one duplicate',
    },
    {
      input: [[0]],
      expected: [[], [0]],
      label: 'single element',
    },
    {
      input: [[1, 1, 2]],
      expected: [[], [1], [1, 1], [1, 1, 2], [1, 2], [2]],
      label: 'duplicate at start',
    },
    {
      input: [[1, 2]],
      expected: [[], [1], [1, 2], [2]],
      label: 'no duplicates',
    },
  ],
};

export const combinationSumII: Problem = {
  id: 'combination-sum-ii',
  neetcodeId: 75,
  title: 'Combination Sum II',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.`,
  examples: [
    {
      input: 'candidates = [10,1,2,7,6,1,5], target = 8',
      output: '[[1,1,6],[1,2,5],[1,7],[2,6]]',
    },
    {
      input: 'candidates = [2,5,2,1,2], target = 5',
      output: '[[1,2,2],[5]]',
    },
  ],
  constraints: [
    '1 <= candidates.length <= 100',
    '1 <= candidates[i] <= 50',
    '1 <= target <= 30',
  ],
  functionSignature: `function combinationSum2(candidates, target) {\n  \n}`,
  testCases: [
    {
      input: [[10, 1, 2, 7, 6, 1, 5], 8],
      expected: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]],
      label: 'with duplicates in input',
    },
    {
      input: [[2, 5, 2, 1, 2], 5],
      expected: [[1, 2, 2], [5]],
      label: 'two valid combinations',
    },
    {
      input: [[1, 1, 1, 1], 2],
      expected: [[1, 1]],
      label: 'all duplicates, one unique combination',
    },
    {
      input: [[1, 2, 3], 7],
      expected: [],
      label: 'no valid combination',
    },
  ],
};

export const wordSearch: Problem = {
  id: 'word-search',
  neetcodeId: 76,
  title: 'Word Search',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.`,
  examples: [
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
    },
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
      output: 'true',
    },
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
      output: 'false',
    },
  ],
  constraints: [
    'm == board.length',
    'n = board[i].length',
    '1 <= m, n <= 6',
    '1 <= word.length <= 15',
    'board and word consists of only lowercase and uppercase English letters.',
  ],
  functionSignature: `function exist(board, word) {\n  \n}`,
  testCases: [
    {
      input: [
        [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
        'ABCCED',
      ],
      expected: true,
      label: 'word found going right then down',
    },
    {
      input: [
        [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
        'SEE',
      ],
      expected: true,
      label: 'word found in bottom-right',
    },
    {
      input: [
        [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
        'ABCB',
      ],
      expected: false,
      label: 'word not found - would reuse cell',
    },
    {
      input: [
        [['A']],
        'A',
      ],
      expected: true,
      label: 'single cell match',
    },
    {
      input: [
        [['A']],
        'B',
      ],
      expected: false,
      label: 'single cell no match',
    },
  ],
};

export const palindromePartitioning: Problem = {
  id: 'palindrome-partitioning',
  neetcodeId: 77,
  title: 'Palindrome Partitioning',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.`,
  examples: [
    {
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
    },
    {
      input: 's = "a"',
      output: '[["a"]]',
    },
  ],
  constraints: [
    '1 <= s.length <= 16',
    's contains only lowercase English letters.',
  ],
  functionSignature: `function partition(s) {\n  \n}`,
  testCases: [
    {
      input: ['aab'],
      expected: [['a', 'a', 'b'], ['aa', 'b']],
      label: 'two partitionings',
    },
    {
      input: ['a'],
      expected: [['a']],
      label: 'single character',
    },
    {
      input: ['aa'],
      expected: [['a', 'a'], ['aa']],
      label: 'two characters same',
    },
    {
      input: ['abc'],
      expected: [['a', 'b', 'c']],
      label: 'no palindromes longer than 1',
    },
  ],
};

export const letterCombinations: Problem = {
  id: 'letter-combinations-of-a-phone-number',
  neetcodeId: 78,
  title: 'Letter Combinations of a Phone Number',
  category: 'Backtracking',
  difficulty: 'Medium',
  description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

2 -> "abc"
3 -> "def"
4 -> "ghi"
5 -> "jkl"
6 -> "mno"
7 -> "pqrs"
8 -> "tuv"
9 -> "wxyz"`,
  examples: [
    {
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
    },
    {
      input: 'digits = ""',
      output: '[]',
    },
    {
      input: 'digits = "2"',
      output: '["a","b","c"]',
    },
  ],
  constraints: [
    '0 <= digits.length <= 4',
    'digits[i] is a digit in the range [\'2\', \'9\'].',
  ],
  functionSignature: `function letterCombinations(digits) {\n  \n}`,
  testCases: [
    {
      input: ['23'],
      expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
      label: 'two digits',
    },
    {
      input: [''],
      expected: [],
      label: 'empty input',
    },
    {
      input: ['2'],
      expected: ['a', 'b', 'c'],
      label: 'single digit',
    },
    {
      input: ['79'],
      expected: ['pw', 'px', 'py', 'pz', 'qw', 'qx', 'qy', 'qz', 'rw', 'rx', 'ry', 'rz', 'sw', 'sx', 'sy', 'sz'],
      label: 'digits with 4-letter mappings',
    },
  ],
};

export const nQueens: Problem = {
  id: 'n-queens',
  neetcodeId: 79,
  title: 'N-Queens',
  category: 'Backtracking',
  difficulty: 'Hard',
  description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.`,
  examples: [
    {
      input: 'n = 4',
      output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      explanation: 'There exist two distinct solutions to the 4-queens puzzle as shown above.',
    },
    {
      input: 'n = 1',
      output: '[["Q"]]',
    },
  ],
  constraints: [
    '1 <= n <= 9',
  ],
  functionSignature: `function solveNQueens(n) {\n  \n}`,
  testCases: [
    {
      input: [4],
      expected: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']],
      label: 'n=4 two solutions',
    },
    {
      input: [1],
      expected: [['Q']],
      label: 'n=1 trivial solution',
    },
    {
      input: [3],
      expected: [],
      label: 'n=3 no solution',
    },
    {
      input: [5],
      expected: [
        ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
        ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
        ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
        ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
        ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
        ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
        ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
        ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
        ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
        ['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
      ],
      label: 'n=5 ten solutions',
    },
  ],
};

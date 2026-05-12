import { Problem } from '../../../src/types';

export const containsDuplicate: Problem = {
  id: 'contains-duplicate',
  neetcodeId: 1,
  title: 'Contains Duplicate',
  category: 'Arrays & Hashing',
  difficulty: 'Easy',
  description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
  examples: [
    { input: 'nums = [1,2,3,1]', output: 'true', explanation: '1 appears twice.' },
    { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'All elements are distinct.' },
    { input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true' },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  functionSignature: `function containsDuplicate(nums) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 1]], expected: true },
    { input: [[1, 2, 3, 4]], expected: false },
    { input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
    { input: [[1]], expected: false },
  ],
};

export const validAnagram: Problem = {
  id: 'valid-anagram',
  neetcodeId: 2,
  title: 'Valid Anagram',
  category: 'Arrays & Hashing',
  difficulty: 'Easy',
  description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.`,
  examples: [
    { input: 's = "anagram", t = "nagaram"', output: 'true' },
    { input: 's = "rat", t = "car"', output: 'false' },
  ],
  constraints: [
    '1 <= s.length, t.length <= 5 * 10^4',
    's and t consist of lowercase English letters',
  ],
  functionSignature: `function isAnagram(s, t) {\n  \n}`,
  testCases: [
    { input: ['anagram', 'nagaram'], expected: true },
    { input: ['rat', 'car'], expected: false },
    { input: ['a', 'a'], expected: true },
    { input: ['ab', 'a'], expected: false },
  ],
};

export const twoSum: Problem = {
  id: 'two-sum',
  neetcodeId: 3,
  title: 'Two Sum',
  category: 'Arrays & Hashing',
  difficulty: 'Easy',
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
  examples: [
    { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] == 9, so we return [0, 1].' },
    { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    { input: 'nums = [3,3], target = 6', output: '[0,1]' },
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
    'Only one valid answer exists.',
  ],
  functionSignature: `function twoSum(nums, target) {\n  \n}`,
  testCases: [
    {
      input: [[2, 7, 11, 15], 9],
      expected: [0, 1],
      comparison: 'unordered-array-deep-equal',
    },
    {
      input: [[3, 2, 4], 6],
      expected: [1, 2],
      comparison: 'unordered-array-deep-equal',
    },
    {
      input: [[3, 3], 6],
      expected: [0, 1],
      comparison: 'unordered-array-deep-equal',
    },
    {
      input: [[1, 5, 6, 7], 13],
      expected: [2, 3],
      comparison: 'unordered-array-deep-equal',
    },
  ],
};

export const groupAnagrams: Problem = {
  id: 'group-anagrams',
  neetcodeId: 4,
  title: 'Group Anagrams',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.`,
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
    },
    { input: 'strs = [""]', output: '[[""]]' },
    { input: 'strs = ["a"]', output: '[["a"]]' },
  ],
  constraints: [
    '1 <= strs.length <= 10^4',
    '0 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters',
  ],
  functionSignature: `function groupAnagrams(strs) {\n  \n}`,
  testCases: [
    {
      input: [['']],
      expected: [['']],
      label: 'single empty string',
    },
    {
      input: [['a']],
      expected: [['a']],
      label: 'single character',
    },
    {
      input: [['abc', 'bca', 'cab']],
      expected: [['abc', 'bca', 'cab']],
      label: 'all one group — same anagram set',
    },
  ],
};

export const topKFrequent: Problem = {
  id: 'top-k-frequent-elements',
  neetcodeId: 5,
  title: 'Top K Frequent Elements',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.`,
  examples: [
    { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
    { input: 'nums = [1], k = 1', output: '[1]' },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    'k is in the range [1, the number of unique elements in the array]',
    'It is guaranteed that the answer is unique.',
  ],
  functionSignature: `function topKFrequent(nums, k) {\n  \n}`,
  testCases: [
    { input: [[1], 1], expected: [1], label: 'single element' },
    { input: [[1, 1, 2], 1], expected: [1], label: 'top 1 of two unique' },
    { input: [[4, 4, 4, 5, 5, 6], 2], expected: [4, 5], label: 'top 2 of three unique' },
    { input: [[5, 5, 5, 4, 4, 4, 4, 3, 3, 2], 3], expected: [4, 5, 3], label: 'Mixed order, top 3 of 4 unique' },
  ],
};

export const encodeDecodeStrings: Problem = {
  id: 'encode-and-decode-strings',
  neetcodeId: 6,
  title: 'Encode and Decode Strings',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Implement the encode function that encodes a list of strings to a single string, and the decode function that decodes a single string back to the original list of strings.`,
  examples: [
    {
      input: 'strs = ["lint","code","love","you"]',
      output: '["lint","code","love","you"]',
      explanation: 'The input is encoded then decoded back to the same list.',
    },
    {
      input: 'strs = ["we","say",":","yes"]',
      output: '["we","say",":","yes"]',
    },
  ],
  constraints: [
    '0 <= strs.length < 100',
    '0 <= strs[i].length < 200',
    'strs[i] contains any possible characters out of 256 valid ASCII characters',
  ],
  functionSignature: `function encode(strs) {\n  \n}\n\nfunction decode(s) {\n  \n}`,
  testCases: [
    {
      input: [['lint', 'code', 'love', 'you']],
      expected: 'string',
      label: 'encode returns a string',
      invocation: '__result__ = typeof encode(__args__[0])',
    },
    {
      input: [['lint', 'code', 'love', 'you']],
      expected: ['lint', 'code', 'love', 'you'],
      label: 'basic round-trip',
      invocation: '__result__ = decode(encode(__args__[0]))',
    },
    {
      input: [['we', 'say', ':', 'yes']],
      expected: ['we', 'say', ':', 'yes'],
      label: 'special characters',
      invocation: '__result__ = decode(encode(__args__[0]))',
    },
    {
      input: [['']],
      expected: [''],
      label: 'single empty string',
      invocation: '__result__ = decode(encode(__args__[0]))',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty list',
      invocation: '__result__ = decode(encode(__args__[0]))',
    },
  ],
};

export const productExceptSelf: Problem = {
  id: 'product-of-array-except-self',
  neetcodeId: 7,
  title: 'Product of Array Except Self',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.`,
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
    },
    {
      input: 'nums = [-1,1,0,-3,3]',
      output: '[0,0,9,0,0]',
    },
  ],
  constraints: [
    '2 <= nums.length <= 10^5',
    '-30 <= nums[i] <= 30',
    'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
  ],
  functionSignature: `function productExceptSelf(nums) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { input: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
    { input: [[2, 3]], expected: [3, 2] },
    { input: [[1, 1, 1, 1]], expected: [1, 1, 1, 1] },
  ],
};

export const validSudoku: Problem = {
  id: 'valid-sudoku',
  neetcodeId: 8,
  title: 'Valid Sudoku',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable. Only the filled cells need to be validated.`,
  examples: [
    {
      input: `board =\n[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]`,
      output: 'true',
    },
    {
      input: `board =\n[["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]`,
      output: 'false',
      explanation: 'There are two 8s in the top-left 3x3 box and two 8s in the first column.',
    },
  ],
  constraints: [
    'board.length == 9',
    'board[i].length == 9',
    'board[i][j] is a digit 1-9 or "."',
  ],
  functionSignature: `function isValidSudoku(board) {\n  \n}`,
  testCases: [
    {
      input: [
        [
          ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
          ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
          ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
          ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
          ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
          ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
          ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
          ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
      ],
      expected: true,
      label: 'valid board',
    },
    {
      input: [
        [
          ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
          ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
          ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
          ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
          ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
          ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
          ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
          ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
      ],
      expected: false,
      label: 'duplicate 8 in column and box',
    },
    {
      input: [
        [
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ],
      ],
      expected: true,
      label: 'empty board',
    },
  ],
};

export const longestConsecutiveSequence: Problem = {
  id: 'longest-consecutive-sequence',
  neetcodeId: 9,
  title: 'Longest Consecutive Sequence',
  category: 'Arrays & Hashing',
  difficulty: 'Medium',
  description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.`,
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '4',
      explanation: 'The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.',
    },
    {
      input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
      output: '9',
    },
  ],
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  functionSignature: `function longestConsecutive(nums) {\n  \n}`,
  testCases: [
    { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
    { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
    { input: [[]], expected: 0 },
    { input: [[1, 2, 3]], expected: 3 },
  ],
};

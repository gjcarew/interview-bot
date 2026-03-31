import { Problem } from '../../../src/types';

export const bestTimeToBuyAndSellStock: Problem = {
  id: 'best-time-to-buy-and-sell-stock',
  neetcodeId: 15,
  title: 'Best Time to Buy and Sell Stock',
  category: 'Sliding Window',
  difficulty: 'Easy',
  description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
  examples: [
    {
      input: 'prices = [7,1,5,3,6,4]',
      output: '5',
      explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.',
    },
    {
      input: 'prices = [7,6,4,3,1]',
      output: '0',
      explanation: 'In this case, no transactions are done and the max profit = 0.',
    },
  ],
  constraints: [
    '1 <= prices.length <= 10^5',
    '0 <= prices[i] <= 10^4',
  ],
  functionSignature: `function maxProfit(prices) {\n  \n}`,
  testCases: [
    { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
    { input: [[7, 6, 4, 3, 1]], expected: 0 },
    { input: [[1, 2]], expected: 1 },
    { input: [[2, 1, 2, 1, 0, 1, 2]], expected: 2, label: 'multiple valleys' },
  ],
};

export const longestSubstringWithoutRepeatingCharacters: Problem = {
  id: 'longest-substring-without-repeating-characters',
  neetcodeId: 16,
  title: 'Longest Substring Without Repeating Characters',
  category: 'Sliding Window',
  difficulty: 'Medium',
  description: `Given a string s, find the length of the longest substring without repeating characters.`,
  examples: [
    {
      input: 's = "abcabcbb"',
      output: '3',
      explanation: 'The answer is "abc", with the length of 3.',
    },
    {
      input: 's = "bbbbb"',
      output: '1',
      explanation: 'The answer is "b", with the length of 1.',
    },
    {
      input: 's = "pwwkew"',
      output: '3',
      explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
    },
  ],
  constraints: [
    '0 <= s.length <= 5 * 10^4',
    's consists of English letters, digits, symbols and spaces',
  ],
  functionSignature: `function lengthOfLongestSubstring(s) {\n  \n}`,
  testCases: [
    { input: ['abcabcbb'], expected: 3 },
    { input: ['bbbbb'], expected: 1 },
    { input: ['pwwkew'], expected: 3 },
    { input: [''], expected: 0, label: 'empty string' },
    { input: ['au'], expected: 2, label: 'two distinct chars' },
  ],
};

export const longestRepeatingCharacterReplacement: Problem = {
  id: 'longest-repeating-character-replacement',
  neetcodeId: 17,
  title: 'Longest Repeating Character Replacement',
  category: 'Sliding Window',
  difficulty: 'Medium',
  description: `You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.`,
  examples: [
    {
      input: 's = "ABAB", k = 2',
      output: '4',
      explanation: 'Replace the two "A"s with two "B"s or vice versa.',
    },
    {
      input: 's = "AABABBA", k = 1',
      output: '4',
      explanation: 'Replace the one "A" in the middle with "B" and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4. There may exist other ways to achieve this answer too.',
    },
  ],
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only uppercase English letters',
    '0 <= k <= s.length',
  ],
  functionSignature: `function characterReplacement(s, k) {\n  \n}`,
  testCases: [
    { input: ['ABAB', 2], expected: 4 },
    { input: ['AABABBA', 1], expected: 4 },
    { input: ['AAAA', 0], expected: 4, label: 'already uniform, k=0' },
    { input: ['ABCD', 2], expected: 3, label: 'all distinct, k=2' },
  ],
};

export const permutationInString: Problem = {
  id: 'permutation-in-string',
  neetcodeId: 18,
  title: 'Permutation in String',
  category: 'Sliding Window',
  difficulty: 'Medium',
  description: `Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.`,
  examples: [
    {
      input: 's1 = "ab", s2 = "eidbaooo"',
      output: 'true',
      explanation: 's2 contains one permutation of s1 ("ba").',
    },
    {
      input: 's1 = "ab", s2 = "eidboaoo"',
      output: 'false',
    },
  ],
  constraints: [
    '1 <= s1.length, s2.length <= 10^4',
    's1 and s2 consist of lowercase English letters',
  ],
  functionSignature: `function checkInclusion(s1, s2) {\n  \n}`,
  testCases: [
    { input: ['ab', 'eidbaooo'], expected: true },
    { input: ['ab', 'eidboaoo'], expected: false },
    { input: ['adc', 'dcda'], expected: true, label: 'permutation at start' },
    { input: ['a', 'b'], expected: false, label: 'no match single char' },
    { input: ['abc', 'bbbca'], expected: true, label: 'permutation at end' },
  ],
};

export const minimumWindowSubstring: Problem = {
  id: 'minimum-window-substring',
  neetcodeId: 19,
  title: 'Minimum Window Substring',
  category: 'Sliding Window',
  difficulty: 'Hard',
  description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.`,
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation: 'The minimum window substring "BANC" includes "A", "B", and "C" from string t.',
    },
    {
      input: 's = "a", t = "a"',
      output: '"a"',
      explanation: 'The entire string s is the minimum window.',
    },
    {
      input: 's = "a", t = "aa"',
      output: '""',
      explanation: 'Both "a"s from t must be included in the window. Since the largest window of s only has one "a", return empty string.',
    },
  ],
  constraints: [
    'm == s.length',
    'n == t.length',
    '1 <= m, n <= 10^5',
    's and t consist of uppercase and lowercase English letters',
  ],
  functionSignature: `function minWindow(s, t) {\n  \n}`,
  testCases: [
    { input: ['ADOBECODEBANC', 'ABC'], expected: 'BANC' },
    { input: ['a', 'a'], expected: 'a' },
    { input: ['a', 'aa'], expected: '' },
    { input: ['aa', 'aa'], expected: 'aa', label: 'exact match with duplicates' },
    { input: ['OUZODYXAZV', 'XY'], expected: 'YXAZ', label: 'non-contiguous required chars' },
  ],
};

export const slidingWindowMaximum: Problem = {
  id: 'sliding-window-maximum',
  neetcodeId: 20,
  title: 'Sliding Window Maximum',
  category: 'Sliding Window',
  difficulty: 'Hard',
  description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.`,
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[3,3,5,5,6,7]',
      explanation: `Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7`,
    },
    {
      input: 'nums = [1], k = 1',
      output: '[1]',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= nums.length',
  ],
  functionSignature: `function maxSlidingWindow(nums, k) {\n  \n}`,
  testCases: [
    { input: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { input: [[1], 1], expected: [1] },
    { input: [[1, -1], 1], expected: [1, -1], label: 'window size 1' },
    { input: [[9, 11], 2], expected: [11], label: 'window covers entire array' },
    { input: [[4, 3, 2, 1], 2], expected: [4, 3, 2], label: 'descending array' },
  ],
};

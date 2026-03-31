import { Problem } from '../../../src/types';

export const uniquePaths: Problem = {
  id: 'unique-paths',
  neetcodeId: 111,
  title: 'Unique Paths',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 10^9.`,
  examples: [
    {
      input: 'm = 3, n = 7',
      output: '28',
    },
    {
      input: 'm = 3, n = 2',
      output: '3',
      explanation: 'From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -> Down -> Down\n2. Down -> Down -> Right\n3. Down -> Right -> Down',
    },
  ],
  constraints: [
    '1 <= m, n <= 100',
  ],
  functionSignature: `function uniquePaths(m, n) {\n  \n}`,
  testCases: [
    { input: [3, 7], expected: 28 },
    { input: [3, 2], expected: 3 },
    { input: [1, 1], expected: 1 },
    { input: [1, 10], expected: 1 },
    { input: [7, 3], expected: 28 },
    { input: [10, 10], expected: 48620 },
  ],
};

export const longestCommonSubsequence: Problem = {
  id: 'longest-common-subsequence',
  neetcodeId: 112,
  title: 'Longest Common Subsequence',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

A common subsequence of two strings is a subsequence that is common to both strings.`,
  examples: [
    {
      input: 'text1 = "abcde", text2 = "ace"',
      output: '3',
      explanation: 'The longest common subsequence is "ace" and its length is 3.',
    },
    {
      input: 'text1 = "abc", text2 = "abc"',
      output: '3',
      explanation: 'The longest common subsequence is "abc" and its length is 3.',
    },
    {
      input: 'text1 = "abc", text2 = "def"',
      output: '0',
      explanation: 'There is no such common subsequence, so the result is 0.',
    },
  ],
  constraints: [
    '1 <= text1.length, text2.length <= 1000',
    'text1 and text2 consist of only lowercase English characters.',
  ],
  functionSignature: `function longestCommonSubsequence(text1, text2) {\n  \n}`,
  testCases: [
    { input: ['abcde', 'ace'], expected: 3 },
    { input: ['abc', 'abc'], expected: 3 },
    { input: ['abc', 'def'], expected: 0 },
    { input: ['bl', 'yby'], expected: 1 },
    { input: ['oxcpqrsvwf', 'shmtulqrypy'], expected: 2 },
  ],
};

export const buyAndSellStockWithCooldown: Problem = {
  id: 'best-time-to-buy-and-sell-stock-with-cooldown',
  neetcodeId: 113,
  title: 'Best Time to Buy and Sell Stock with Cooldown',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`,
  examples: [
    {
      input: 'prices = [1,2,3,0,2]',
      output: '3',
      explanation: 'transactions = [buy, sell, cooldown, buy, sell]',
    },
    {
      input: 'prices = [1]',
      output: '0',
    },
  ],
  constraints: [
    '1 <= prices.length <= 5000',
    '0 <= prices[i] <= 1000',
  ],
  functionSignature: `function maxProfit(prices) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 0, 2]], expected: 3 },
    { input: [[1]], expected: 0 },
    { input: [[1, 2, 3, 4, 5]], expected: 4 },
    { input: [[5, 4, 3, 2, 1]], expected: 0 },
    { input: [[6, 1, 3, 2, 4, 7]], expected: 6 },
  ],
};

export const coinChangeII: Problem = {
  id: 'coin-change-ii',
  neetcodeId: 114,
  title: 'Coin Change II',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.`,
  examples: [
    {
      input: 'amount = 5, coins = [1,2,5]',
      output: '4',
      explanation: 'there are four ways to make up the amount:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1',
    },
    {
      input: 'amount = 3, coins = [2]',
      output: '0',
      explanation: 'the amount of 3 cannot be made up just with coins of 2.',
    },
    {
      input: 'amount = 10, coins = [10]',
      output: '1',
    },
  ],
  constraints: [
    '1 <= coins.length <= 300',
    '1 <= coins[i] <= 5000',
    'All the values of coins are unique.',
    '0 <= amount <= 5000',
  ],
  functionSignature: `function change(amount, coins) {\n  \n}`,
  testCases: [
    { input: [5, [1, 2, 5]], expected: 4 },
    { input: [3, [2]], expected: 0 },
    { input: [10, [10]], expected: 1 },
    { input: [0, [1, 2, 3]], expected: 1 },
    { input: [500, [3, 5, 7, 8, 9, 10, 11]], expected: 35502874 },
  ],
};

export const targetSum: Problem = {
  id: 'target-sum',
  neetcodeId: 115,
  title: 'Target Sum',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.`,
  examples: [
    {
      input: 'nums = [1,1,1,1,1], target = 3',
      output: '5',
      explanation: 'There are 5 ways to assign symbols to make the sum of nums be target 3.\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3',
    },
    {
      input: 'nums = [1], target = 1',
      output: '1',
    },
  ],
  constraints: [
    '1 <= nums.length <= 20',
    '0 <= nums[i] <= 1000',
    '0 <= sum(nums[i]) <= 1000',
    '-1000 <= target <= 1000',
  ],
  functionSignature: `function findTargetSumWays(nums, target) {\n  \n}`,
  testCases: [
    { input: [[1, 1, 1, 1, 1], 3], expected: 5 },
    { input: [[1], 1], expected: 1 },
    { input: [[1], -1], expected: 1 },
    { input: [[0, 0, 0, 0, 0, 0, 0, 0, 1], 1], expected: 256 },
    { input: [[1, 2, 3, 4, 5], 3], expected: 3 },
  ],
};

export const interleavingString: Problem = {
  id: 'interleaving-string',
  neetcodeId: 116,
  title: 'Interleaving String',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1

The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.`,
  examples: [
    {
      input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"',
      output: 'true',
    },
    {
      input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"',
      output: 'false',
    },
    {
      input: 's1 = "", s2 = "", s3 = ""',
      output: 'true',
    },
  ],
  constraints: [
    '0 <= s1.length, s2.length <= 100',
    '0 <= s3.length <= 200',
    's1, s2, and s3 consist of lowercase English letters.',
  ],
  functionSignature: `function isInterleave(s1, s2, s3) {\n  \n}`,
  testCases: [
    { input: ['aabcc', 'dbbca', 'aadbbcbcac'], expected: true },
    { input: ['aabcc', 'dbbca', 'aadbbbaccc'], expected: false },
    { input: ['', '', ''], expected: true },
    { input: ['a', 'b', 'ab'], expected: true },
    { input: ['a', 'b', 'ba'], expected: true },
    { input: ['a', 'b', 'c'], expected: false },
  ],
};

export const longestIncreasingPathInMatrix: Problem = {
  id: 'longest-increasing-path-in-a-matrix',
  neetcodeId: 117,
  title: 'Longest Increasing Path in a Matrix',
  category: '2-D DP',
  difficulty: 'Hard',
  description: `Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).`,
  examples: [
    {
      input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]',
      output: '4',
      explanation: 'The longest increasing path is [1, 2, 6, 9].',
    },
    {
      input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]',
      output: '4',
      explanation: 'The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.',
    },
    {
      input: 'matrix = [[1]]',
      output: '1',
    },
  ],
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 200',
    '0 <= matrix[i][j] <= 2^31 - 1',
  ],
  functionSignature: `function longestIncreasingPath(matrix) {\n  \n}`,
  testCases: [
    { input: [[[9, 9, 4], [6, 6, 8], [2, 1, 1]]], expected: 4 },
    { input: [[[3, 4, 5], [3, 2, 6], [2, 2, 1]]], expected: 4 },
    { input: [[[1]]], expected: 1 },
    { input: [[[1, 2], [3, 4]]], expected: 3 },
    { input: [[[1, 2, 3], [6, 5, 4], [7, 8, 9]]], expected: 9 },
  ],
};

export const distinctSubsequences: Problem = {
  id: 'distinct-subsequences',
  neetcodeId: 118,
  title: 'Distinct Subsequences',
  category: '2-D DP',
  difficulty: 'Hard',
  description: `Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.`,
  examples: [
    {
      input: 's = "rabbbit", t = "rabbit"',
      output: '3',
      explanation: 'There are 3 ways you can generate "rabbit" from s.\n(The caret symbol ^ means the chosen letters)\n\nrabbbit\n^^^ ^^ \nrabbbit\n^^ ^^^ \nrabbbit\n^^  ^^^',
    },
    {
      input: 's = "babgbag", t = "bag"',
      output: '5',
      explanation: 'There are 5 ways you can generate "bag" from s.\n\nbabgbag\n^^ ^   \nbabgbag\n^^    ^\nbabgbag\n^ ^^   \nbabgbag\n^   ^^ \nbabgbag\n    ^^^',
    },
  ],
  constraints: [
    '1 <= s.length, t.length <= 1000',
    's and t consist of English letters.',
  ],
  functionSignature: `function numDistinct(s, t) {\n  \n}`,
  testCases: [
    { input: ['rabbbit', 'rabbit'], expected: 3 },
    { input: ['babgbag', 'bag'], expected: 5 },
    { input: ['a', 'a'], expected: 1 },
    { input: ['aaa', 'a'], expected: 3 },
    { input: ['aaa', 'aa'], expected: 3 },
  ],
};

export const editDistance: Problem = {
  id: 'edit-distance',
  neetcodeId: 119,
  title: 'Edit Distance',
  category: '2-D DP',
  difficulty: 'Medium',
  description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character`,
  examples: [
    {
      input: 'word1 = "horse", word2 = "ros"',
      output: '3',
      explanation: 'horse -> rorse (replace \'h\' with \'r\')\nrorse -> rose (remove \'r\')\nrose -> ros (remove \'e\')',
    },
    {
      input: 'word1 = "intention", word2 = "execution"',
      output: '5',
      explanation: 'intention -> inention (remove \'t\')\ninention -> enention (replace \'i\' with \'e\')\nenention -> exention (replace \'n\' with \'x\')\nexention -> exection (replace \'n\' with \'c\')\nexection -> execution (insert \'u\')',
    },
  ],
  constraints: [
    '0 <= word1.length, word2.length <= 500',
    'word1 and word2 consist of lowercase English letters.',
  ],
  functionSignature: `function minDistance(word1, word2) {\n  \n}`,
  testCases: [
    { input: ['horse', 'ros'], expected: 3 },
    { input: ['intention', 'execution'], expected: 5 },
    { input: ['', ''], expected: 0 },
    { input: ['', 'a'], expected: 1 },
    { input: ['a', ''], expected: 1 },
    { input: ['abc', 'abc'], expected: 0 },
  ],
};

export const burstBalloons: Problem = {
  id: 'burst-balloons',
  neetcodeId: 120,
  title: 'Burst Balloons',
  category: '2-D DP',
  difficulty: 'Hard',
  description: `You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.`,
  examples: [
    {
      input: 'nums = [3,1,5,8]',
      output: '167',
      explanation: 'nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167',
    },
    {
      input: 'nums = [1,5]',
      output: '10',
    },
  ],
  constraints: [
    'n == nums.length',
    '1 <= n <= 300',
    '0 <= nums[i] <= 100',
  ],
  functionSignature: `function maxCoins(nums) {\n  \n}`,
  testCases: [
    { input: [[3, 1, 5, 8]], expected: 167 },
    { input: [[1, 5]], expected: 10 },
    { input: [[1]], expected: 1 },
    { input: [[0]], expected: 0 },
    { input: [[7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]], expected: 1654 },
  ],
};

export const regularExpressionMatching: Problem = {
  id: 'regular-expression-matching',
  neetcodeId: 121,
  title: 'Regular Expression Matching',
  category: '2-D DP',
  difficulty: 'Hard',
  description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

- '.' Matches any single character.
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).`,
  examples: [
    {
      input: 's = "aa", p = "a"',
      output: 'false',
      explanation: '"a" does not match the entire string "aa".',
    },
    {
      input: 's = "aa", p = "a*"',
      output: 'true',
      explanation: '\'*\' means zero or more of the preceding element, \'a\'. Therefore, by repeating \'a\' once, it becomes "aa".',
    },
    {
      input: 's = "ab", p = ".*"',
      output: 'true',
      explanation: '".*" means "zero or more (*) of any character (.)".',
    },
  ],
  constraints: [
    '1 <= s.length <= 20',
    '1 <= p.length <= 30',
    's contains only lowercase English letters.',
    'p contains only lowercase English letters, \'.\', and \'*\'.',
    'It is guaranteed for each appearance of the character \'*\', there will be a previous valid character to match.',
  ],
  functionSignature: `function isMatch(s, p) {\n  \n}`,
  testCases: [
    { input: ['aa', 'a'], expected: false },
    { input: ['aa', 'a*'], expected: true },
    { input: ['ab', '.*'], expected: true },
    { input: ['aab', 'c*a*b'], expected: true },
    { input: ['mississippi', 'mis*is*p*.'], expected: false },
    { input: ['', '.*'], expected: true },
  ],
};

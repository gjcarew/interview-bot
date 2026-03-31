import { Problem } from '../../../src/types';

export const climbingStairs: Problem = {
  id: 'climbing-stairs',
  neetcodeId: 99,
  title: 'Climbing Stairs',
  category: '1-D DP',
  difficulty: 'Easy',
  description: `You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
  examples: [
    { input: 'n = 2', output: '2', explanation: 'There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps' },
    { input: 'n = 3', output: '3', explanation: 'There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step' },
  ],
  constraints: [
    '1 <= n <= 45',
  ],
  functionSignature: `function climbStairs(n) {\n  \n}`,
  testCases: [
    { input: [1], expected: 1, label: 'single step' },
    { input: [2], expected: 2 },
    { input: [3], expected: 3 },
    { input: [5], expected: 8 },
    { input: [10], expected: 89 },
  ],
};

export const minCostClimbingStairs: Problem = {
  id: 'min-cost-climbing-stairs',
  neetcodeId: 100,
  title: 'Min Cost Climbing Stairs',
  category: '1-D DP',
  difficulty: 'Easy',
  description: `You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.`,
  examples: [
    {
      input: 'cost = [10,15,20]',
      output: '15',
      explanation: 'You will start at index 1. Pay 15 and climb two steps to reach the top. The total cost is 15.',
    },
    {
      input: 'cost = [1,100,1,1,1,100,1,1,100,1]',
      output: '6',
      explanation: 'You will start at index 0. Pay 1 and climb two steps to index 2. Pay 1 and climb two steps to index 4. Pay 1 and climb two steps to index 6. Pay 1 and climb one step to index 7. Pay 1 and climb two steps to index 9. Pay 1 and climb one step to reach the top. The total cost is 6.',
    },
  ],
  constraints: [
    '2 <= cost.length <= 1000',
    '0 <= cost[i] <= 999',
  ],
  functionSignature: `function minCostClimbingStairs(cost) {\n  \n}`,
  testCases: [
    { input: [[10, 15, 20]], expected: 15 },
    { input: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], expected: 6 },
    { input: [[0, 0]], expected: 0 },
    { input: [[10, 15]], expected: 10 },
  ],
};

export const houseRobber: Problem = {
  id: 'house-robber',
  neetcodeId: 101,
  title: 'House Robber',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
  examples: [
    { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.' },
    { input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.' },
  ],
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 400',
  ],
  functionSignature: `function rob(nums) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 1]], expected: 4 },
    { input: [[2, 7, 9, 3, 1]], expected: 12 },
    { input: [[1]], expected: 1, label: 'single house' },
    { input: [[2, 1]], expected: 2 },
    { input: [[0, 0, 0]], expected: 0 },
  ],
};

export const houseRobberII: Problem = {
  id: 'house-robber-ii',
  neetcodeId: 102,
  title: 'House Robber II',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
  examples: [
    { input: 'nums = [2,3,2]', output: '3', explanation: 'You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.' },
    { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.' },
    { input: 'nums = [1,2,3]', output: '3' },
  ],
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 1000',
  ],
  functionSignature: `function rob(nums) {\n  \n}`,
  testCases: [
    { input: [[2, 3, 2]], expected: 3 },
    { input: [[1, 2, 3, 1]], expected: 4 },
    { input: [[1, 2, 3]], expected: 3 },
    { input: [[1]], expected: 1, label: 'single house' },
    { input: [[200, 3, 140, 20, 10]], expected: 340, label: 'larger values' },
  ],
};

export const longestPalindromicSubstring: Problem = {
  id: 'longest-palindromic-substring',
  neetcodeId: 103,
  title: 'Longest Palindromic Substring',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given a string s, return the longest palindromic substring in s.`,
  examples: [
    { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
    { input: 's = "cbbd"', output: '"bb"' },
  ],
  constraints: [
    '1 <= s.length <= 1000',
    's consist of only digits and English letters.',
  ],
  functionSignature: `function longestPalindrome(s) {\n  \n}`,
  testCases: [
    { input: ['babad'], expected: 'bab' },
    { input: ['cbbd'], expected: 'bb' },
    { input: ['a'], expected: 'a', label: 'single character' },
    { input: ['racecar'], expected: 'racecar', label: 'entire string is palindrome' },
    { input: ['ac'], expected: 'a', label: 'no palindrome longer than 1' },
  ],
};

export const palindromicSubstrings: Problem = {
  id: 'palindromic-substrings',
  neetcodeId: 104,
  title: 'Palindromic Substrings',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.`,
  examples: [
    { input: 's = "abc"', output: '3', explanation: 'Three palindromic strings: "a", "b", "c".' },
    { input: 's = "aaa"', output: '6', explanation: 'Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".' },
  ],
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  functionSignature: `function countSubstrings(s) {\n  \n}`,
  testCases: [
    { input: ['abc'], expected: 3 },
    { input: ['aaa'], expected: 6 },
    { input: ['a'], expected: 1, label: 'single character' },
    { input: ['racecar'], expected: 10 },
  ],
};

export const decodeWays: Problem = {
  id: 'decode-ways',
  neetcodeId: 105,
  title: 'Decode Ways',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

- "AAJF" with the grouping (1 1 10 6)
- "KJF" with the grouping (11 10 6)

Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.`,
  examples: [
    { input: 's = "12"', output: '2', explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).' },
    { input: 's = "226"', output: '3', explanation: '"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).' },
    { input: 's = "06"', output: '0', explanation: '"06" cannot be decoded because "0" cannot map to any letter.' },
  ],
  constraints: [
    '1 <= s.length <= 100',
    's contains only digits and may contain leading zeros.',
  ],
  functionSignature: `function numDecodings(s) {\n  \n}`,
  testCases: [
    { input: ['12'], expected: 2 },
    { input: ['226'], expected: 3 },
    { input: ['06'], expected: 0, label: 'leading zero' },
    { input: ['11106'], expected: 2 },
    { input: ['1'], expected: 1, label: 'single digit' },
  ],
};

export const coinChange: Problem = {
  id: 'coin-change',
  neetcodeId: 106,
  title: 'Coin Change',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.`,
  examples: [
    { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
    { input: 'coins = [2], amount = 3', output: '-1' },
    { input: 'coins = [1], amount = 0', output: '0' },
  ],
  constraints: [
    '1 <= coins.length <= 12',
    '1 <= coins[i] <= 2^31 - 1',
    '0 <= amount <= 10^4',
  ],
  functionSignature: `function coinChange(coins, amount) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 5], 11], expected: 3 },
    { input: [[2], 3], expected: -1 },
    { input: [[1], 0], expected: 0, label: 'amount is zero' },
    { input: [[1], 2], expected: 2 },
    { input: [[186, 419, 83, 408], 6249], expected: 20 },
  ],
};

export const maximumProductSubarray: Problem = {
  id: 'maximum-product-subarray',
  neetcodeId: 107,
  title: 'Maximum Product Subarray',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.`,
  examples: [
    { input: 'nums = [2,3,-2,4]', output: '6', explanation: '[2,3] has the largest product 6.' },
    { input: 'nums = [-2,0,-1]', output: '0', explanation: 'The result cannot be 2, because [-2,-1] is not a subarray.' },
  ],
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '-10 <= nums[i] <= 10',
    'The product of any subarray of nums is guaranteed to fit in a 32-bit integer.',
  ],
  functionSignature: `function maxProduct(nums) {\n  \n}`,
  testCases: [
    { input: [[2, 3, -2, 4]], expected: 6 },
    { input: [[-2, 0, -1]], expected: 0 },
    { input: [[-2]], expected: -2, label: 'single negative' },
    { input: [[0, 2]], expected: 2 },
    { input: [[-2, 3, -4]], expected: 24, label: 'two negatives' },
  ],
};

export const wordBreak: Problem = {
  id: 'word-break',
  neetcodeId: 108,
  title: 'Word Break',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.`,
  examples: [
    {
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      explanation: 'Return true because "leetcode" can be segmented as "leet code".',
    },
    {
      input: 's = "applepenapple", wordDict = ["apple","pen"]',
      output: 'true',
      explanation: 'Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.',
    },
    {
      input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
      output: 'false',
    },
  ],
  constraints: [
    '1 <= s.length <= 300',
    '1 <= wordDict.length <= 1000',
    '1 <= wordDict[i].length <= 20',
    's and wordDict[i] consist of only lowercase English letters.',
    'All the strings of wordDict are unique.',
  ],
  functionSignature: `function wordBreak(s, wordDict) {\n  \n}`,
  testCases: [
    { input: ['leetcode', ['leet', 'code']], expected: true },
    { input: ['applepenapple', ['apple', 'pen']], expected: true },
    { input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: false },
    { input: ['a', ['a']], expected: true, label: 'single character match' },
    { input: ['aaaaaaa', ['aaaa', 'aaa']], expected: true },
  ],
};

export const longestIncreasingSubsequence: Problem = {
  id: 'longest-increasing-subsequence',
  neetcodeId: 109,
  title: 'Longest Increasing Subsequence',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given an integer array nums, return the length of the longest strictly increasing subsequence.`,
  examples: [
    {
      input: 'nums = [10,9,2,5,3,7,101,18]',
      output: '4',
      explanation: 'The longest increasing subsequence is [2,3,7,101], therefore the length is 4.',
    },
    { input: 'nums = [0,1,0,3,2,3]', output: '4' },
    { input: 'nums = [7,7,7,7,7,7,7]', output: '1' },
  ],
  constraints: [
    '1 <= nums.length <= 2500',
    '-10^4 <= nums[i] <= 10^4',
  ],
  functionSignature: `function lengthOfLIS(nums) {\n  \n}`,
  testCases: [
    { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
    { input: [[0, 1, 0, 3, 2, 3]], expected: 4 },
    { input: [[7, 7, 7, 7, 7, 7, 7]], expected: 1, label: 'all same values' },
    { input: [[1]], expected: 1, label: 'single element' },
    { input: [[1, 2, 3, 4, 5]], expected: 5, label: 'already sorted' },
  ],
};

export const partitionEqualSubsetSum: Problem = {
  id: 'partition-equal-subset-sum',
  neetcodeId: 110,
  title: 'Partition Equal Subset Sum',
  category: '1-D DP',
  difficulty: 'Medium',
  description: `Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.`,
  examples: [
    {
      input: 'nums = [1,5,11,5]',
      output: 'true',
      explanation: 'The array can be partitioned as [1, 5, 5] and [11].',
    },
    {
      input: 'nums = [1,2,3,5]',
      output: 'false',
      explanation: 'The array cannot be partitioned into equal sum subsets.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
  ],
  functionSignature: `function canPartition(nums) {\n  \n}`,
  testCases: [
    { input: [[1, 5, 11, 5]], expected: true },
    { input: [[1, 2, 3, 5]], expected: false },
    { input: [[1, 1]], expected: true, label: 'two equal elements' },
    { input: [[1, 2]], expected: false, label: 'two unequal elements' },
    { input: [[3, 3, 3, 4, 5]], expected: true },
  ],
};

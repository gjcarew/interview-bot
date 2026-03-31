import { Problem } from '../../../src/types';

export const validPalindrome: Problem = {
  id: 'valid-palindrome',
  neetcodeId: 10,
  title: 'Valid Palindrome',
  category: 'Two Pointers',
  difficulty: 'Easy',
  description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.`,
  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    {
      input: 's = "race a car"',
      output: 'false',
      explanation: '"raceacar" is not a palindrome.',
    },
    {
      input: 's = " "',
      output: 'true',
      explanation: 's is an empty string "" after removing non-alphanumeric characters. An empty string reads the same forward and backward, so it is a palindrome.',
    },
  ],
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of printable ASCII characters',
  ],
  functionSignature: `function isPalindrome(s) {\n  \n}`,
  testCases: [
    { input: ['A man, a plan, a canal: Panama'], expected: true },
    { input: ['race a car'], expected: false },
    { input: [' '], expected: true },
    { input: ['0P'], expected: false },
    { input: ['Was it a car or a cat I saw?'], expected: true },
  ],
};

export const twoSumII: Problem = {
  id: 'two-sum-ii-input-array-is-sorted',
  neetcodeId: 11,
  title: 'Two Sum II - Input Array Is Sorted',
  category: 'Two Pointers',
  difficulty: 'Medium',
  description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.`,
  examples: [
    {
      input: 'numbers = [2,7,11,15], target = 9',
      output: '[1,2]',
      explanation: 'The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].',
    },
    {
      input: 'numbers = [2,3,4], target = 6',
      output: '[1,3]',
      explanation: 'The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].',
    },
    {
      input: 'numbers = [-1,0], target = -1',
      output: '[1,2]',
      explanation: 'The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].',
    },
  ],
  constraints: [
    '2 <= numbers.length <= 3 * 10^4',
    '-1000 <= numbers[i] <= 1000',
    'numbers is sorted in non-decreasing order',
    '-1000 <= target <= 1000',
    'The tests are generated such that there is exactly one solution.',
  ],
  functionSignature: `function twoSum(numbers, target) {\n  \n}`,
  testCases: [
    { input: [[2, 7, 11, 15], 9], expected: [1, 2] },
    { input: [[2, 3, 4], 6], expected: [1, 3] },
    { input: [[-1, 0], -1], expected: [1, 2] },
    { input: [[1, 2, 3, 4, 4, 9, 56, 90], 8], expected: [4, 5] },
  ],
};

export const threeSum: Problem = {
  id: '3sum',
  neetcodeId: 12,
  title: '3Sum',
  category: 'Two Pointers',
  difficulty: 'Medium',
  description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2].',
    },
    {
      input: 'nums = [0,1,1]',
      output: '[]',
      explanation: 'The only possible triplet does not sum up to 0.',
    },
    {
      input: 'nums = [0,0,0]',
      output: '[[0,0,0]]',
      explanation: 'The only possible triplet sums up to 0.',
    },
  ],
  constraints: [
    '3 <= nums.length <= 3000',
    '-10^5 <= nums[i] <= 10^5',
  ],
  functionSignature: `function threeSum(nums) {\n  \n}`,
  testCases: [
    { input: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]], label: 'standard case' },
    { input: [[0, 1, 1]], expected: [], label: 'no valid triplets' },
    { input: [[0, 0, 0]], expected: [[0, 0, 0]], label: 'all zeros' },
    { input: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]], label: 'multiple triplets' },
  ],
};

export const containerWithMostWater: Problem = {
  id: 'container-with-most-water',
  neetcodeId: 13,
  title: 'Container With Most Water',
  category: 'Two Pointers',
  difficulty: 'Medium',
  description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.`,
  examples: [
    {
      input: 'height = [1,8,6,2,5,4,8,3,7]',
      output: '49',
      explanation: 'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.',
    },
    {
      input: 'height = [1,1]',
      output: '1',
    },
  ],
  constraints: [
    'n == height.length',
    '2 <= n <= 10^5',
    '0 <= height[i] <= 10^4',
  ],
  functionSignature: `function maxArea(height) {\n  \n}`,
  testCases: [
    { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { input: [[1, 1]], expected: 1 },
    { input: [[4, 3, 2, 1, 4]], expected: 16 },
    { input: [[1, 2, 1]], expected: 2 },
  ],
};

export const trappingRainWater: Problem = {
  id: 'trapping-rain-water',
  neetcodeId: 14,
  title: 'Trapping Rain Water',
  category: 'Two Pointers',
  difficulty: 'Hard',
  description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
  examples: [
    {
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.',
    },
    {
      input: 'height = [4,2,0,3,2,5]',
      output: '9',
    },
  ],
  constraints: [
    'n == height.length',
    '1 <= n <= 2 * 10^4',
    '0 <= height[i] <= 10^5',
  ],
  functionSignature: `function trap(height) {\n  \n}`,
  testCases: [
    { input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { input: [[4, 2, 0, 3, 2, 5]], expected: 9 },
    { input: [[0, 0, 0]], expected: 0, label: 'flat ground, no water' },
    { input: [[3, 0, 2, 0, 4]], expected: 7 },
  ],
};

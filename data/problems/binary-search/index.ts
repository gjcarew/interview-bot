import { Problem } from '../../../src/types';

export const binarySearch: Problem = {
  id: 'binary-search',
  neetcodeId: 28,
  title: 'Binary Search',
  category: 'Binary Search',
  difficulty: 'Easy',
  description: `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.`,
  examples: [
    {
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
      explanation: '9 exists in nums and its index is 4.',
    },
    {
      input: 'nums = [-1,0,3,5,9,12], target = 2',
      output: '-1',
      explanation: '2 does not exist in nums so return -1.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 < nums[i], target < 10^4',
    'All the integers in nums are unique.',
    'nums is sorted in ascending order.',
  ],
  functionSignature: `function search(nums, target) {\n  \n}`,
  testCases: [
    { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { input: [[5], 5], expected: 0 },
    { input: [[1, 3, 5, 7, 9], 3], expected: 1 },
    { input: [[1, 3, 5, 7, 9], 6], expected: -1 },
  ],
};

export const searchA2DMatrix: Problem = {
  id: 'search-a-2d-matrix',
  neetcodeId: 29,
  title: 'Search a 2D Matrix',
  category: 'Binary Search',
  difficulty: 'Medium',
  description: `You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.`,
  examples: [
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      output: 'true',
    },
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
      output: 'false',
    },
  ],
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 100',
    '-10^4 <= matrix[i][j], target <= 10^4',
  ],
  functionSignature: `function searchMatrix(matrix, target) {\n  \n}`,
  testCases: [
    { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expected: true },
    { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expected: false },
    { input: [[[1]], 1], expected: true },
    { input: [[[1]], 2], expected: false },
    { input: [[[1, 3], [5, 7]], 5], expected: true },
    { input: [[[1, 3], [5, 7]], 4], expected: false },
  ],
};

export const kokoEatingBananas: Problem = {
  id: 'koko-eating-bananas',
  neetcodeId: 30,
  title: 'Koko Eating Bananas',
  category: 'Binary Search',
  difficulty: 'Medium',
  description: `Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.`,
  examples: [
    {
      input: 'piles = [3,6,7,11], h = 8',
      output: '4',
    },
    {
      input: 'piles = [30,11,23,4,20], h = 5',
      output: '30',
    },
    {
      input: 'piles = [30,11,23,4,20], h = 6',
      output: '23',
    },
  ],
  constraints: [
    '1 <= piles.length <= 10^4',
    'piles.length <= h <= 10^9',
    '1 <= piles[i] <= 10^9',
  ],
  functionSignature: `function minEatingSpeed(piles, h) {\n  \n}`,
  testCases: [
    { input: [[3, 6, 7, 11], 8], expected: 4 },
    { input: [[30, 11, 23, 4, 20], 5], expected: 30 },
    { input: [[30, 11, 23, 4, 20], 6], expected: 23 },
    { input: [[1000000000], 2], expected: 500000000 },
  ],
};

export const findMinimumInRotatedSortedArray: Problem = {
  id: 'find-minimum-in-rotated-sorted-array',
  neetcodeId: 31,
  title: 'Find Minimum in Rotated Sorted Array',
  category: 'Binary Search',
  difficulty: 'Medium',
  description: `Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.`,
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: '1',
      explanation: 'The original array was [1,2,3,4,5] rotated 3 times.',
    },
    {
      input: 'nums = [4,5,6,7,0,1,2]',
      output: '0',
      explanation: 'The original array was [0,1,2,4,5,6,7] rotated 4 times.',
    },
    {
      input: 'nums = [11,13,15,17]',
      output: '11',
      explanation: 'The original array was [11,13,15,17] rotated 4 times.',
    },
  ],
  constraints: [
    'n == nums.length',
    '1 <= n <= 5000',
    '-5000 <= nums[i] <= 5000',
    'All the integers of nums are unique.',
    'nums is sorted and rotated between 1 and n times.',
  ],
  functionSignature: `function findMin(nums) {\n  \n}`,
  testCases: [
    { input: [[3, 4, 5, 1, 2]], expected: 1 },
    { input: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
    { input: [[11, 13, 15, 17]], expected: 11 },
    { input: [[2, 1]], expected: 1 },
    { input: [[1]], expected: 1 },
  ],
};

export const searchInRotatedSortedArray: Problem = {
  id: 'search-in-rotated-sorted-array',
  neetcodeId: 32,
  title: 'Search in Rotated Sorted Array',
  category: 'Binary Search',
  difficulty: 'Medium',
  description: `There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.`,
  examples: [
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 0',
      output: '4',
    },
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 3',
      output: '-1',
    },
    {
      input: 'nums = [1], target = 0',
      output: '-1',
    },
  ],
  constraints: [
    '1 <= nums.length <= 5000',
    '-10^4 <= nums[i] <= 10^4',
    'All values of nums are unique.',
    'nums is an ascending array that is possibly rotated.',
    '-10^4 <= target <= 10^4',
  ],
  functionSignature: `function search(nums, target) {\n  \n}`,
  testCases: [
    { input: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { input: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { input: [[1], 0], expected: -1 },
    { input: [[1, 3], 3], expected: 1 },
    { input: [[3, 1], 1], expected: 1 },
    { input: [[5, 1, 3], 5], expected: 0 },
  ],
};

export const timeBasedKeyValueStore: Problem = {
  id: 'time-based-key-value-store',
  neetcodeId: 33,
  title: 'Time Based Key-Value Store',
  category: 'Binary Search',
  difficulty: 'Medium',
  description: `Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:
- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key with the value value at the given time timestamp.
- String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".`,
  examples: [
    {
      input:
        '["TimeMap","set","get","get","set","get","get"]\n[[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]',
      output: '[null,null,"bar","bar",null,"bar2","bar2"]',
      explanation:
        'TimeMap timeMap = new TimeMap();\ntimeMap.set("foo", "bar", 1);\ntimeMap.get("foo", 1) returns "bar";\ntimeMap.get("foo", 3) returns "bar" (no value at t=3, so returns value at t=1);\ntimeMap.set("foo", "bar2", 4);\ntimeMap.get("foo", 4) returns "bar2";\ntimeMap.get("foo", 5) returns "bar2".',
    },
  ],
  constraints: [
    '1 <= key.length, value.length <= 100',
    'key and value consist of lowercase English letters and digits.',
    '1 <= timestamp <= 10^7',
    'All the timestamps timestamp of set are strictly increasing.',
    'At most 2 * 10^5 calls will be made to set and get.',
  ],
  functionSignature: `class TimeMap {
  constructor() {
    
  }

  set(key, value, timestamp) {
    
  }

  get(key, timestamp) {
    
  }
}`,
  testCases: [
    {
      input: [
        ['TimeMap', 'set', 'get', 'get', 'set', 'get', 'get'],
        [[], ['foo', 'bar', 1], ['foo', 1], ['foo', 3], ['foo', 'bar2', 4], ['foo', 4], ['foo', 5]],
      ],
      expected: [null, null, 'bar', 'bar', null, 'bar2', 'bar2'],
      label: 'Basic set and get with timestamp lookup',
    },
    {
      input: [
        ['TimeMap', 'set', 'get'],
        [[], ['love', 'high', 10], ['love', 5]],
      ],
      expected: [null, null, ''],
      label: 'Get returns empty string when timestamp is before any set',
    },
    {
      input: [
        ['TimeMap', 'set', 'set', 'get', 'get', 'get'],
        [[], ['a', 'one', 1], ['a', 'two', 2], ['a', 1], ['a', 2], ['a', 3]],
      ],
      expected: [null, null, null, 'one', 'two', 'two'],
      label: 'Multiple values for same key',
    },
    {
      input: [
        ['TimeMap', 'set', 'get'],
        [[], ['k', 'v', 100], ['k', 100]],
      ],
      expected: [null, null, 'v'],
      label: 'Exact timestamp match',
    },
  ],
};

export const medianOfTwoSortedArrays: Problem = {
  id: 'median-of-two-sorted-arrays',
  neetcodeId: 34,
  title: 'Median of Two Sorted Arrays',
  category: 'Binary Search',
  difficulty: 'Hard',
  description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
  examples: [
    {
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.00000',
      explanation: 'merged array = [1,2,3] and median is 2.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.50000',
      explanation: 'merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.',
    },
  ],
  constraints: [
    'nums1.length == m',
    'nums2.length == n',
    '0 <= m <= 1000',
    '0 <= n <= 1000',
    '1 <= m + n <= 2000',
    '-10^6 <= nums1[i], nums2[i] <= 10^6',
  ],
  functionSignature: `function findMedianSortedArrays(nums1, nums2) {\n  \n}`,
  testCases: [
    { input: [[1, 3], [2]], expected: 2.0 },
    { input: [[1, 2], [3, 4]], expected: 2.5 },
    { input: [[0, 0], [0, 0]], expected: 0.0 },
    { input: [[], [1]], expected: 1.0 },
    { input: [[2], []], expected: 2.0 },
    { input: [[1, 3], [2, 4]], expected: 2.5 },
  ],
};

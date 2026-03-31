import { Problem } from '../../../src/types';

export const maximumSubarray: Problem = {
  id: 'maximum-subarray',
  neetcodeId: 122,
  title: 'Maximum Subarray',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The subarray [1] has the largest sum 1.',
    },
    {
      input: 'nums = [5,4,-1,7,8]',
      output: '23',
      explanation: 'The subarray [5,4,-1,7,8] has the largest sum 23.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  functionSignature: `function maxSubArray(nums) {\n  \n}`,
  testCases: [
    { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { input: [[1]], expected: 1 },
    { input: [[5, 4, -1, 7, 8]], expected: 23 },
    { input: [[-1]], expected: -1 },
    { input: [[-2, -1]], expected: -1 },
  ],
};

export const jumpGame: Problem = {
  id: 'jump-game',
  neetcodeId: 123,
  title: 'Jump Game',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.`,
  examples: [
    {
      input: 'nums = [2,3,1,1,4]',
      output: 'true',
      explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.',
    },
    {
      input: 'nums = [3,2,1,0,4]',
      output: 'false',
      explanation: 'You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^5',
  ],
  functionSignature: `function canJump(nums) {\n  \n}`,
  testCases: [
    { input: [[2, 3, 1, 1, 4]], expected: true },
    { input: [[3, 2, 1, 0, 4]], expected: false },
    { input: [[0]], expected: true },
    { input: [[1, 0, 1, 0]], expected: false },
    { input: [[2, 0, 0]], expected: true },
  ],
};

export const jumpGameII: Problem = {
  id: 'jump-game-ii',
  neetcodeId: 124,
  title: 'Jump Game II',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
- 0 <= j <= nums[i] and
- i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].`,
  examples: [
    {
      input: 'nums = [2,3,1,1,4]',
      output: '2',
      explanation: 'The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.',
    },
    {
      input: 'nums = [2,3,0,1,4]',
      output: '2',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= nums[i] <= 1000',
    'The generated test cases are such that you can always reach nums[n - 1].',
  ],
  functionSignature: `function jump(nums) {\n  \n}`,
  testCases: [
    { input: [[2, 3, 1, 1, 4]], expected: 2 },
    { input: [[2, 3, 0, 1, 4]], expected: 2 },
    { input: [[1]], expected: 0 },
    { input: [[1, 2, 1, 1, 1]], expected: 3 },
    { input: [[1, 1, 1, 1]], expected: 3 },
  ],
};

export const gasStation: Problem = {
  id: 'gas-station',
  neetcodeId: 125,
  title: 'Gas Station',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.`,
  examples: [
    {
      input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]',
      output: '3',
      explanation: 'Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4. Travel to station 4. Your tank = 4 - 1 + 5 = 8. Travel to station 0. Your tank = 8 - 2 + 1 = 7. Travel to station 1. Your tank = 7 - 3 + 2 = 6. Travel to station 2. Your tank = 6 - 4 + 3 = 5. Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.',
    },
    {
      input: 'gas = [2,3,4], cost = [3,4,3]',
      output: '-1',
      explanation: 'You can\'t start at station 0 or 1, as there is not enough gas to travel to the next station. Let\'s start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4. Travel to station 0. Your tank = 4 - 3 + 2 = 3. Travel to station 1. Your tank = 3 - 3 + 3 = 3. You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.',
    },
  ],
  constraints: [
    'n == gas.length == cost.length',
    '1 <= n <= 10^5',
    '0 <= gas[i], cost[i] <= 10^4',
  ],
  functionSignature: `function canCompleteCircuit(gas, cost) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]], expected: 3 },
    { input: [[2, 3, 4], [3, 4, 3]], expected: -1 },
    { input: [[5], [4]], expected: 0 },
    { input: [[1, 2], [2, 1]], expected: 1 },
    { input: [[3, 1, 1], [1, 2, 2]], expected: 0 },
  ],
};

export const handOfStraights: Problem = {
  id: 'hand-of-straights',
  neetcodeId: 126,
  title: 'Hand of Straights',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.`,
  examples: [
    {
      input: 'hand = [1,2,3,6,2,3,4,7,8], groupSize = 3',
      output: 'true',
      explanation: 'Alice\'s hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].',
    },
    {
      input: 'hand = [1,2,3,4,5], groupSize = 4',
      output: 'false',
      explanation: 'Alice\'s hand can\'t be rearranged into groups of 4.',
    },
  ],
  constraints: [
    '1 <= hand.length <= 10^4',
    '0 <= hand[i] <= 10^9',
    '1 <= groupSize <= hand.length',
  ],
  functionSignature: `function isNStraightHand(hand, groupSize) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 6, 2, 3, 4, 7, 8], 3], expected: true },
    { input: [[1, 2, 3, 4, 5], 4], expected: false },
    { input: [[1], 1], expected: true },
    { input: [[1, 2, 3, 4, 5, 6], 2], expected: true },
    { input: [[1, 2, 3, 4, 5, 6], 3], expected: true },
    { input: [[1, 2, 3, 4], 3], expected: false },
  ],
};

export const mergeTripletsToFormTargetTriplet: Problem = {
  id: 'merge-triplets-to-form-target-triplet',
  neetcodeId: 127,
  title: 'Merge Triplets to Form Target Triplet',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.

To obtain target, you may apply the following operation on triplets any number of times:
- Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].

For example, if triplets[j] = [2, 5, 3] and triplets[i] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].

Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.`,
  examples: [
    {
      input: 'triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]',
      output: 'true',
      explanation: 'Perform the following operations:\n- Choose the first and third triplets. Update the third triplet to [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]\nThe third triplet [2,7,5] is now the target.',
    },
    {
      input: 'triplets = [[3,4,5],[4,5,6]], target = [3,2,5]',
      output: 'false',
      explanation: 'It is impossible to have [3,2,5] as an element because 2 is not in any triplet.',
    },
    {
      input: 'triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]',
      output: 'true',
    },
  ],
  constraints: [
    '1 <= triplets.length <= 10^5',
    'triplets[i].length == target.length == 3',
    '1 <= ai, bi, ci, x, y, z <= 1000',
  ],
  functionSignature: `function mergeTriplets(triplets, target) {\n  \n}`,
  testCases: [
    { input: [[[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]], expected: true },
    { input: [[[3, 4, 5], [4, 5, 6]], [3, 2, 5]], expected: false },
    { input: [[[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5]], expected: true },
    { input: [[[1, 1, 1]], [1, 1, 1]], expected: true },
    { input: [[[1, 1, 2], [1, 2, 1]], [1, 2, 2]], expected: true },
  ],
};

export const partitionLabels: Problem = {
  id: 'partition-labels',
  neetcodeId: 128,
  title: 'Partition Labels',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.`,
  examples: [
    {
      input: 's = "ababcbacadefegdehijhklij"',
      output: '[9,7,8]',
      explanation: 'The partition is "ababcbaca", "defegde", "hijhklij". This is a partition so that each letter appears in at most one part. A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into fewer parts.',
    },
    {
      input: 's = "eccbbbbdec"',
      output: '[10]',
    },
  ],
  constraints: [
    '1 <= s.length <= 500',
    's consists of lowercase English letters.',
  ],
  functionSignature: `function partitionLabels(s) {\n  \n}`,
  testCases: [
    { input: ['ababcbacadefegdehijhklij'], expected: [9, 7, 8] },
    { input: ['eccbbbbdec'], expected: [10] },
    { input: ['a'], expected: [1] },
    { input: ['abcd'], expected: [1, 1, 1, 1] },
    { input: ['caedbdedda'], expected: [1, 9] },
  ],
};

export const validParenthesisString: Problem = {
  id: 'valid-parenthesis-string',
  neetcodeId: 129,
  title: 'Valid Parenthesis String',
  category: 'Greedy',
  difficulty: 'Medium',
  description: `Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:
- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".`,
  examples: [
    {
      input: 's = "()"',
      output: 'true',
    },
    {
      input: 's = "(*)"',
      output: 'true',
    },
    {
      input: 's = "(*))"',
      output: 'true',
    },
  ],
  constraints: [
    '1 <= s.length <= 100',
    's[i] is \'(\', \')\' or \'*\'.',
  ],
  functionSignature: `function checkValidString(s) {\n  \n}`,
  testCases: [
    { input: ['()'], expected: true },
    { input: ['(*)'], expected: true },
    { input: ['(*))'], expected: true },
    { input: ['(((*'], expected: false },
    { input: ['(*(*))'], expected: true },
    { input: [')'], expected: false },
    { input: [''], expected: true },
  ],
};

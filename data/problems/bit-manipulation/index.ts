import { Problem } from '../../../src/types';

export const singleNumber: Problem = {
  id: 'single-number',
  neetcodeId: 144,
  title: 'Single Number',
  category: 'Bit Manipulation',
  difficulty: 'Easy',
  description: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,
  examples: [
    { input: 'nums = [2,2,1]', output: '1' },
    { input: 'nums = [4,1,2,1,2]', output: '4' },
    { input: 'nums = [1]', output: '1' },
  ],
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-3 * 10^4 <= nums[i] <= 3 * 10^4',
    'Each element in the array appears twice except for one element which appears only once.',
  ],
  functionSignature: `function singleNumber(nums) {\n  \n}`,
  testCases: [
    { input: [[2, 2, 1]], expected: 1 },
    { input: [[4, 1, 2, 1, 2]], expected: 4 },
    { input: [[1]], expected: 1 },
    { input: [[0, 1, 0]], expected: 1 },
  ],
};

export const numberOf1Bits: Problem = {
  id: 'number-of-1-bits',
  neetcodeId: 145,
  title: 'Number of 1 Bits',
  category: 'Bit Manipulation',
  difficulty: 'Easy',
  description: `Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).`,
  examples: [
    {
      input: 'n = 11',
      output: '3',
      explanation: 'The input binary representation of 11 is 1011, which has a total of three set bits.',
    },
    {
      input: 'n = 128',
      output: '1',
      explanation: 'The input binary representation of 128 is 10000000, which has a total of one set bit.',
    },
    {
      input: 'n = 2147483645',
      output: '30',
      explanation: 'The input binary representation of 2147483645 is 1111111111111111111111111111101, which has a total of thirty set bits.',
    },
  ],
  constraints: [
    '1 <= n <= 2^31 - 1',
  ],
  functionSignature: `function hammingWeight(n) {\n  \n}`,
  testCases: [
    { input: [11], expected: 3, label: '1011 in binary' },
    { input: [128], expected: 1, label: '10000000 in binary' },
    { input: [2147483645], expected: 30 },
    { input: [1], expected: 1 },
  ],
};

export const countingBits: Problem = {
  id: 'counting-bits',
  neetcodeId: 146,
  title: 'Counting Bits',
  category: 'Bit Manipulation',
  difficulty: 'Easy',
  description: `Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.`,
  examples: [
    {
      input: 'n = 2',
      output: '[0,1,1]',
      explanation: '0 --> 0, 1 --> 1, 2 --> 10',
    },
    {
      input: 'n = 5',
      output: '[0,1,1,2,1,2]',
      explanation: '0 --> 0, 1 --> 1, 2 --> 10, 3 --> 11, 4 --> 100, 5 --> 101',
    },
  ],
  constraints: [
    '0 <= n <= 10^5',
  ],
  functionSignature: `function countBits(n) {\n  \n}`,
  testCases: [
    { input: [2], expected: [0, 1, 1] },
    { input: [5], expected: [0, 1, 1, 2, 1, 2] },
    { input: [0], expected: [0] },
    { input: [4], expected: [0, 1, 1, 2, 1] },
  ],
};

export const reverseBits: Problem = {
  id: 'reverse-bits',
  neetcodeId: 147,
  title: 'Reverse Bits',
  category: 'Bit Manipulation',
  difficulty: 'Easy',
  description: `Reverse bits of a given 32 bits unsigned integer.

Note: Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, since the integer's internal binary representation is the same, whether it is signed or unsigned.`,
  examples: [
    {
      input: 'n = 00000010100101000001111010011100',
      output: '964176192 (00111001011110000010100101000000)',
      explanation: 'The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.',
    },
    {
      input: 'n = 11111111111111111111111111111101',
      output: '3221225471 (10111111111111111111111111111111)',
      explanation: 'The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.',
    },
  ],
  constraints: [
    'The input must be a binary string of length 32',
  ],
  functionSignature: `function reverseBits(n) {\n  \n}`,
  testCases: [
    { input: [43261596], expected: 964176192, label: '00000010100101000001111010011100' },
    { input: [4294967293], expected: 3221225471, label: '11111111111111111111111111111101' },
    { input: [0], expected: 0, label: 'all zeros' },
    { input: [1], expected: 2147483648, label: '00000000000000000000000000000001 reversed' },
  ],
};

export const missingNumber: Problem = {
  id: 'missing-number',
  neetcodeId: 148,
  title: 'Missing Number',
  category: 'Bit Manipulation',
  difficulty: 'Easy',
  description: `Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.`,
  examples: [
    {
      input: 'nums = [3,0,1]',
      output: '2',
      explanation: 'n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.',
    },
    {
      input: 'nums = [0,1]',
      output: '2',
      explanation: 'n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.',
    },
    {
      input: 'nums = [9,6,4,2,3,5,7,0,1]',
      output: '8',
      explanation: 'n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.',
    },
  ],
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^4',
    '0 <= nums[i] <= n',
    'All the numbers of nums are unique.',
  ],
  functionSignature: `function missingNumber(nums) {\n  \n}`,
  testCases: [
    { input: [[3, 0, 1]], expected: 2 },
    { input: [[0, 1]], expected: 2 },
    { input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
    { input: [[0]], expected: 1 },
  ],
};

export const sumOfTwoIntegers: Problem = {
  id: 'sum-of-two-integers',
  neetcodeId: 149,
  title: 'Sum of Two Integers',
  category: 'Bit Manipulation',
  difficulty: 'Medium',
  description: `Given two integers a and b, return the sum of the two integers without using the operators + and -.`,
  examples: [
    { input: 'a = 1, b = 2', output: '3' },
    { input: 'a = 2, b = 3', output: '5' },
  ],
  constraints: [
    '-1000 <= a <= 1000',
    '-1000 <= b <= 1000',
  ],
  functionSignature: `function getSum(a, b) {\n  \n}`,
  testCases: [
    { input: [1, 2], expected: 3 },
    { input: [2, 3], expected: 5 },
    { input: [-1, 1], expected: 0 },
    { input: [0, 0], expected: 0 },
    { input: [-5, -3], expected: -8 },
  ],
};

export const reverseInteger: Problem = {
  id: 'reverse-integer',
  neetcodeId: 150,
  title: 'Reverse Integer',
  category: 'Bit Manipulation',
  difficulty: 'Medium',
  description: `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
  examples: [
    { input: 'x = 123', output: '321' },
    { input: 'x = -123', output: '-321' },
    { input: 'x = 120', output: '21' },
  ],
  constraints: [
    '-2^31 <= x <= 2^31 - 1',
  ],
  functionSignature: `function reverse(x) {\n  \n}`,
  testCases: [
    { input: [123], expected: 321 },
    { input: [-123], expected: -321 },
    { input: [120], expected: 21 },
    { input: [0], expected: 0 },
    { input: [1534236469], expected: 0, label: 'overflow returns 0' },
  ],
};

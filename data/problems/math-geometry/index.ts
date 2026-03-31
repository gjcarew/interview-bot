import { Problem } from '../../../src/types';

export const rotateImage: Problem = {
  id: 'rotate-image',
  neetcodeId: 136,
  title: 'Rotate Image',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Note: For testing purposes, return the modified matrix after rotating.`,
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[[7,4,1],[8,5,2],[9,6,3]]',
    },
    {
      input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
      output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
    },
  ],
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 20',
    '-1000 <= matrix[i][j] <= 1000',
  ],
  functionSignature: `function rotate(matrix) {\n  \n  return matrix;\n}`,
  testCases: [
    { input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[7,4,1],[8,5,2],[9,6,3]] },
    { input: [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]], expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] },
    { input: [[[1]]], expected: [[1]] },
    { input: [[[1,2],[3,4]]], expected: [[3,1],[4,2]] },
  ],
};

export const spiralMatrix: Problem = {
  id: 'spiral-matrix',
  neetcodeId: 137,
  title: 'Spiral Matrix',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,2,3,6,9,8,7,4,5]',
    },
    {
      input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]',
      output: '[1,2,3,4,8,12,11,10,9,5,6,7]',
    },
  ],
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 10',
    '-100 <= matrix[i][j] <= 100',
  ],
  functionSignature: `function spiralOrder(matrix) {\n  \n}`,
  testCases: [
    { input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [1,2,3,6,9,8,7,4,5] },
    { input: [[[1,2,3,4],[5,6,7,8],[9,10,11,12]]], expected: [1,2,3,4,8,12,11,10,9,5,6,7] },
    { input: [[[1]]], expected: [1] },
    { input: [[[1,2],[3,4]]], expected: [1,2,4,3] },
    { input: [[[3],[2]]], expected: [3,2] },
  ],
};

export const setMatrixZeroes: Problem = {
  id: 'set-matrix-zeroes',
  neetcodeId: 138,
  title: 'Set Matrix Zeroes',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Note: For testing purposes, return the modified matrix after setting zeroes.`,
  examples: [
    {
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
    },
    {
      input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]',
      output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]',
    },
  ],
  constraints: [
    'm == matrix.length',
    'n == matrix[0].length',
    '1 <= m, n <= 200',
    '-2^31 <= matrix[i][j] <= 2^31 - 1',
  ],
  functionSignature: `function setZeroes(matrix) {\n  \n  return matrix;\n}`,
  testCases: [
    { input: [[[1,1,1],[1,0,1],[1,1,1]]], expected: [[1,0,1],[0,0,0],[1,0,1]] },
    { input: [[[0,1,2,0],[3,4,5,2],[1,3,1,5]]], expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] },
    { input: [[[1,2,3],[4,0,6],[7,8,9]]], expected: [[1,0,3],[0,0,0],[7,0,9]] },
    { input: [[[1]]], expected: [[1]] },
  ],
};

export const happyNumber: Problem = {
  id: 'happy-number',
  neetcodeId: 139,
  title: 'Happy Number',
  category: 'Math & Geometry',
  difficulty: 'Easy',
  description: `Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.`,
  examples: [
    {
      input: 'n = 19',
      output: 'true',
      explanation: '1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1',
    },
    {
      input: 'n = 2',
      output: 'false',
    },
  ],
  constraints: [
    '1 <= n <= 2^31 - 1',
  ],
  functionSignature: `function isHappy(n) {\n  \n}`,
  testCases: [
    { input: [19], expected: true },
    { input: [2], expected: false },
    { input: [1], expected: true },
    { input: [7], expected: true },
    { input: [4], expected: false },
  ],
};

export const plusOne: Problem = {
  id: 'plus-one',
  neetcodeId: 140,
  title: 'Plus One',
  category: 'Math & Geometry',
  difficulty: 'Easy',
  description: `You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.`,
  examples: [
    {
      input: 'digits = [1,2,3]',
      output: '[1,2,4]',
      explanation: 'The array represents the integer 123. Incrementing by one gives 124.',
    },
    {
      input: 'digits = [4,3,2,1]',
      output: '[4,3,2,2]',
      explanation: 'The array represents the integer 4321. Incrementing by one gives 4322.',
    },
    {
      input: 'digits = [9]',
      output: '[1,0]',
      explanation: 'The array represents the integer 9. Incrementing by one gives 10.',
    },
  ],
  constraints: [
    '1 <= digits.length <= 100',
    '0 <= digits[i] <= 9',
    'digits does not contain any leading 0s.',
  ],
  functionSignature: `function plusOne(digits) {\n  \n}`,
  testCases: [
    { input: [[1,2,3]], expected: [1,2,4] },
    { input: [[4,3,2,1]], expected: [4,3,2,2] },
    { input: [[9]], expected: [1,0] },
    { input: [[9,9,9]], expected: [1,0,0,0] },
    { input: [[0]], expected: [1] },
  ],
};

export const myPow: Problem = {
  id: 'pow-x-n',
  neetcodeId: 141,
  title: 'Pow(x, n)',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).`,
  examples: [
    {
      input: 'x = 2.00000, n = 10',
      output: '1024.00000',
    },
    {
      input: 'x = 2.10000, n = 3',
      output: '9.26100',
    },
    {
      input: 'x = 2.00000, n = -2',
      output: '0.25000',
      explanation: '2^(-2) = (1/2)^2 = 0.25',
    },
  ],
  constraints: [
    '-100.0 < x < 100.0',
    '-2^31 <= n <= 2^31 - 1',
    'n is an integer.',
    'Either x is not zero or n > 0.',
    '-10^4 <= x^n <= 10^4',
  ],
  functionSignature: `function myPow(x, n) {\n  \n}`,
  testCases: [
    { input: [2.0, 10], expected: 1024.0 },
    { input: [2.0, -2], expected: 0.25 },
    { input: [1.0, 5], expected: 1.0 },
    { input: [0.5, 2], expected: 0.25 },
    { input: [2.0, 0], expected: 1.0 },
  ],
};

export const multiplyStrings: Problem = {
  id: 'multiply-strings',
  neetcodeId: 142,
  title: 'Multiply Strings',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.`,
  examples: [
    {
      input: 'num1 = "2", num2 = "3"',
      output: '"6"',
    },
    {
      input: 'num1 = "123", num2 = "456"',
      output: '"56088"',
    },
  ],
  constraints: [
    '1 <= num1.length, num2.length <= 200',
    'num1 and num2 consist of digits only.',
    'Both num1 and num2 do not contain any leading zero, except the number 0 itself.',
  ],
  functionSignature: `function multiply(num1, num2) {\n  \n}`,
  testCases: [
    { input: ['2', '3'], expected: '6' },
    { input: ['123', '456'], expected: '56088' },
    { input: ['0', '0'], expected: '0' },
    { input: ['99', '99'], expected: '9801' },
    { input: ['0', '12345'], expected: '0' },
  ],
};

export const detectSquares: Problem = {
  id: 'detect-squares',
  neetcodeId: 143,
  title: 'Detect Squares',
  category: 'Math & Geometry',
  difficulty: 'Medium',
  description: `You are given a stream of points on the X-Y plane. Design an algorithm that:

- Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
- Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.

An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.

Implement the DetectSquares class:
- DetectSquares() Initializes the object with an empty data structure.
- void add(int[] point) Adds a new point point = [x, y] to the data structure.
- int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.

Note: For testing, implement a simulation function detectSquaresRun(operations, values) that creates a DetectSquares instance and runs each operation in sequence, returning an array of results (null for add, integer for count).`,
  examples: [
    {
      input: '["DetectSquares","add","add","add","count","count","add","count"]\n[[],[[3,10]],[[11,2]],[[3,2]],[[11,10]],[[14,8]],[[11,2]],[[11,10]]]',
      output: '[null,null,null,null,1,0,null,2]',
      explanation: 'After adding [3,10], [11,2], [3,2]: count([11,10]) returns 1 because one axis-aligned square exists. count([14,8]) returns 0. After adding [11,2] again, count([11,10]) returns 2.',
    },
  ],
  constraints: [
    'point.length == 2',
    '0 <= x, y <= 1000',
    'At most 3000 calls in total will be made to add and count.',
  ],
  functionSignature: `class DetectSquares {
  constructor() {
    
  }

  add(point) {
    
  }

  count(point) {
    
  }
}

function detectSquaresRun(operations, values) {
  const ds = new DetectSquares();
  return operations.map((op, i) => {
    if (op === 'add') { ds.add(values[i][0]); return null; }
    return ds.count(values[i][0]);
  });
}`,
  testCases: [
    {
      input: [
        ['add', 'add', 'add', 'count', 'count', 'add', 'count'],
        [[[3,10]], [[11,2]], [[3,2]], [[11,10]], [[14,8]], [[11,2]], [[11,10]]],
      ],
      expected: [null, null, null, 1, 0, null, 2],
      label: 'Basic example from problem statement',
    },
    {
      input: [
        ['add', 'add', 'add', 'count'],
        [[[0,0]], [[2,0]], [[0,2]], [[2,2]]],
      ],
      expected: [null, null, null, 1],
      label: 'Simple 2x2 square',
    },
    {
      input: [
        ['add', 'add', 'add', 'count'],
        [[[0,0]], [[1,0]], [[0,1]], [[1,1]]],
      ],
      expected: [null, null, null, 1],
      label: '1x1 unit square',
    },
    {
      input: [
        ['add', 'count'],
        [[[0,0]], [[1,1]]],
      ],
      expected: [null, 0],
      label: 'Not enough points for a square',
    },
  ],
};

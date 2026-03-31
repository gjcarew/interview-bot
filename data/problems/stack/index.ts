import { Problem } from '../../../src/types';

export const validParentheses: Problem = {
  id: 'valid-parentheses',
  neetcodeId: 21,
  title: 'Valid Parentheses',
  category: 'Stack',
  difficulty: 'Easy',
  description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
  examples: [
    { input: 's = "()"', output: 'true' },
    { input: 's = "()[]{}"', output: 'true' },
    { input: 's = "(]"', output: 'false' },
  ],
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of parentheses only \'()[]{}\''
  ],
  functionSignature: `function isValid(s) {\n  \n}`,
  testCases: [
    { input: ['()'], expected: true },
    { input: ['()[]{}'], expected: true },
    { input: ['(]'], expected: false },
    { input: ['([)]'], expected: false },
    { input: ['{[]}'], expected: true },
    { input: [')'], expected: false },
  ],
};

export const minStack: Problem = {
  id: 'min-stack',
  neetcodeId: 22,
  title: 'Min Stack',
  category: 'Stack',
  difficulty: 'Medium',
  description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.`,
  examples: [
    {
      input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
      output: '[null,null,null,null,-3,null,0,-2]',
      explanation: 'MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2',
    },
  ],
  constraints: [
    '-2^31 <= val <= 2^31 - 1',
    'Methods pop, top and getMin operations will always be called on non-empty stacks.',
    'At most 3 * 10^4 calls will be made to push, pop, top, and getMin.',
  ],
  functionSignature: `class MinStack {\n  constructor() {\n    \n  }\n  push(val) {\n    \n  }\n  pop() {\n    \n  }\n  top() {\n    \n  }\n  getMin() {\n    \n  }\n}`,
  testCases: [
    {
      input: [['push', -2], ['push', 0], ['push', -3], ['getMin']],
      expected: -3,
      label: 'getMin after three pushes',
    },
    {
      input: [['push', -2], ['push', 0], ['push', -3], ['getMin'], ['pop'], ['top']],
      expected: 0,
      label: 'top after pop',
    },
    {
      input: [['push', -2], ['push', 0], ['push', -3], ['pop'], ['getMin']],
      expected: -2,
      label: 'getMin after popping the minimum',
    },
    {
      input: [['push', 5], ['push', 3], ['push', 7], ['getMin']],
      expected: 3,
      label: 'getMin with middle element as minimum',
    },
  ],
};

export const evaluateReversePolishNotation: Problem = {
  id: 'evaluate-reverse-polish-notation',
  neetcodeId: 23,
  title: 'Evaluate Reverse Polish Notation',
  category: 'Stack',
  difficulty: 'Medium',
  description: `You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
- The valid operators are '+', '-', '*', and '/'.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.`,
  examples: [
    {
      input: 'tokens = ["2","1","+","3","*"]',
      output: '9',
      explanation: '((2 + 1) * 3) = 9',
    },
    {
      input: 'tokens = ["4","13","5","/","+"]',
      output: '6',
      explanation: '(4 + (13 / 5)) = 6',
    },
    {
      input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
      output: '22',
      explanation: '((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 22',
    },
  ],
  constraints: [
    '1 <= tokens.length <= 10^4',
    'tokens[i] is either an operator "+", "-", "*", or "/", or an integer in the range [-200, 200].',
  ],
  functionSignature: `function evalRPN(tokens) {\n  \n}`,
  testCases: [
    { input: [['2', '1', '+', '3', '*']], expected: 9 },
    { input: [['4', '13', '5', '/', '+']], expected: 6 },
    { input: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 },
    { input: [['3', '4', '-']], expected: -1, label: 'subtraction' },
    { input: [['5', '1', '2', '+', '4', '*', '+', '3', '-']], expected: 14, label: 'complex expression' },
  ],
};

export const generateParentheses: Problem = {
  id: 'generate-parentheses',
  neetcodeId: 24,
  title: 'Generate Parentheses',
  category: 'Stack',
  difficulty: 'Medium',
  description: `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.`,
  examples: [
    {
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
    },
    {
      input: 'n = 1',
      output: '["()"]',
    },
  ],
  constraints: [
    '1 <= n <= 8',
  ],
  functionSignature: `function generateParenthesis(n) {\n  \n}`,
  testCases: [
    { input: [1], expected: ['()'], label: 'n=1' },
    { input: [2], expected: ['(())', '()()'], label: 'n=2' },
    { input: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'], label: 'n=3' },
    { input: [4], expected: ['(((())))', '((()()))', '((())())', '((()))()', '(()(()))', '(()()())', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()'], label: 'n=4' },
  ],
};

export const dailyTemperatures: Problem = {
  id: 'daily-temperatures',
  neetcodeId: 25,
  title: 'Daily Temperatures',
  category: 'Stack',
  difficulty: 'Medium',
  description: `Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.`,
  examples: [
    {
      input: 'temperatures = [73,74,75,71,69,72,76,73]',
      output: '[1,1,4,2,1,1,0,0]',
    },
    {
      input: 'temperatures = [30,40,50,60]',
      output: '[1,1,1,0]',
    },
    {
      input: 'temperatures = [30,60,90]',
      output: '[1,1,0]',
    },
  ],
  constraints: [
    '1 <= temperatures.length <= 10^5',
    '30 <= temperatures[i] <= 100',
  ],
  functionSignature: `function dailyTemperatures(temperatures) {\n  \n}`,
  testCases: [
    { input: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
    { input: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { input: [[30, 60, 90]], expected: [1, 1, 0] },
    { input: [[90, 80, 70]], expected: [0, 0, 0], label: 'strictly decreasing' },
  ],
};

export const carFleet: Problem = {
  id: 'car-fleet',
  neetcodeId: 26,
  title: 'Car Fleet',
  category: 'Stack',
  difficulty: 'Medium',
  description: `There are n cars at given miles away from the starting mile 0, traveling to their destination at target miles.

You are given two integer arrays, position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car cannot pass another car, but it can catch up to it and travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the moment the fleet reaches the target, it is still considered as part of the fleet.

Return the number of car fleets that will arrive at the destination.`,
  examples: [
    {
      input: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]',
      output: '3',
      explanation: 'The cars starting at positions 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The car starting at position 0 does not catch up to any other car, so it is a fleet by itself. The cars starting at positions 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6.\nNote that no other cars meet these fleets before the destination, so the answer is 3.',
    },
    {
      input: 'target = 10, position = [3], speed = [3]',
      output: '1',
      explanation: 'There is only one car, hence there is only one fleet.',
    },
    {
      input: 'target = 100, position = [0,2,4], speed = [4,2,1]',
      output: '1',
      explanation: 'The cars starting at positions 0 (speed 4) and 2 (speed 2) and 4 (speed 1) become one fleet, meeting each other at some point before 100.',
    },
  ],
  constraints: [
    'n == position.length == speed.length',
    '1 <= n <= 10^5',
    '0 < target <= 10^6',
    '0 <= position[i] < target',
    '0 < speed[i] <= 10^6',
    'All the values of position are unique.',
  ],
  functionSignature: `function carFleet(target, position, speed) {\n  \n}`,
  testCases: [
    { input: [12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]], expected: 3 },
    { input: [10, [3], [3]], expected: 1 },
    { input: [100, [0, 2, 4], [4, 2, 1]], expected: 1 },
    { input: [10, [6, 8], [3, 2]], expected: 2, label: 'two separate fleets' },
  ],
};

export const largestRectangleInHistogram: Problem = {
  id: 'largest-rectangle-in-histogram',
  neetcodeId: 27,
  title: 'Largest Rectangle in Histogram',
  category: 'Stack',
  difficulty: 'Hard',
  description: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
  examples: [
    {
      input: 'heights = [2,1,5,6,2,3]',
      output: '10',
      explanation: 'The largest rectangle is shown in the shaded area, which has an area = 10 units.',
    },
    {
      input: 'heights = [2,4]',
      output: '4',
    },
  ],
  constraints: [
    '1 <= heights.length <= 10^5',
    '0 <= heights[i] <= 10^4',
  ],
  functionSignature: `function largestRectangleArea(heights) {\n  \n}`,
  testCases: [
    { input: [[2, 1, 5, 6, 2, 3]], expected: 10 },
    { input: [[2, 4]], expected: 4 },
    { input: [[1]], expected: 1, label: 'single bar' },
    { input: [[1, 1, 1, 1]], expected: 4, label: 'uniform height' },
    { input: [[6, 2, 5, 4, 5, 1, 6]], expected: 12, label: 'varied heights' },
  ],
};

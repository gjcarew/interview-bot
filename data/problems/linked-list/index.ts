import { Problem } from '../../../src/types';

export const reverseLinkedList: Problem = {
  id: 'reverse-linked-list',
  neetcodeId: 35,
  title: 'Reverse Linked List',
  category: 'Linked List',
  difficulty: 'Easy',
  description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
  examples: [
    { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
    { input: 'head = [1,2]', output: '[2,1]' },
    { input: 'head = []', output: '[]' },
  ],
  constraints: [
    'The number of nodes in the list is the range [0, 5000].',
    '-5000 <= Node.val <= 5000',
  ],
  functionSignature: `function reverseList(head) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1], label: 'five nodes' },
    { input: [[1, 2]], expected: [2, 1], label: 'two nodes' },
    { input: [[]], expected: [], label: 'empty list' },
    { input: [[1]], expected: [1], label: 'single node' },
  ],
};

export const mergeTwoSortedLists: Problem = {
  id: 'merge-two-sorted-lists',
  neetcodeId: 36,
  title: 'Merge Two Sorted Lists',
  category: 'Linked List',
  difficulty: 'Easy',
  description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
  examples: [
    { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
    { input: 'list1 = [], list2 = []', output: '[]' },
    { input: 'list1 = [], list2 = [0]', output: '[0]' },
  ],
  constraints: [
    'The number of nodes in both lists is in the range [0, 50].',
    '-100 <= Node.val <= 100',
    'Both list1 and list2 are sorted in non-decreasing order.',
  ],
  functionSignature: `function mergeTwoLists(list1, list2) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4], label: 'two equal-length lists' },
    { input: [[], []], expected: [], label: 'both empty' },
    { input: [[], [0]], expected: [0], label: 'first empty' },
    { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6], label: 'interleaved values' },
  ],
};

export const reorderList: Problem = {
  id: 'reorder-list',
  neetcodeId: 37,
  title: 'Reorder List',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `You are given the head of a singly linked-list:

L0 → L1 → … → Ln-1 → Ln

Reorder it to:

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.`,
  examples: [
    { input: 'head = [1,2,3,4]', output: '[1,4,2,3]' },
    { input: 'head = [1,2,3,4,5]', output: '[1,5,2,4,3]' },
  ],
  constraints: [
    'The number of nodes in the list is in the range [1, 5 * 10^4].',
    '1 <= Node.val <= 1000',
  ],
  functionSignature: `function reorderList(head) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4]], expected: [1, 4, 2, 3], label: 'even length' },
    { input: [[1, 2, 3, 4, 5]], expected: [1, 5, 2, 4, 3], label: 'odd length' },
    { input: [[1]], expected: [1], label: 'single node' },
    { input: [[1, 2]], expected: [1, 2], label: 'two nodes' },
  ],
};

export const removeNthNodeFromEnd: Problem = {
  id: 'remove-nth-node-from-end-of-list',
  neetcodeId: 38,
  title: 'Remove Nth Node From End of List',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
  examples: [
    { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]', explanation: 'Remove the 2nd node from the end (value 4).' },
    { input: 'head = [1], n = 1', output: '[]' },
    { input: 'head = [1,2], n = 1', output: '[1]' },
  ],
  constraints: [
    'The number of nodes in the list is sz.',
    '1 <= sz <= 30',
    '0 <= Node.val <= 100',
    '1 <= n <= sz',
  ],
  functionSignature: `function removeNthFromEnd(head, n) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5], label: 'remove 2nd from end' },
    { input: [[1], 1], expected: [], label: 'remove only node' },
    { input: [[1, 2], 1], expected: [1], label: 'remove last' },
    { input: [[1, 2, 3], 3], expected: [2, 3], label: 'remove head' },
  ],
};

export const copyListWithRandomPointer: Problem = {
  id: 'copy-list-with-random-pointer',
  neetcodeId: 39,
  title: 'Copy List with Random Pointer',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.`,
  examples: [
    {
      input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
      output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
    },
    {
      input: 'head = [[1,1],[2,1]]',
      output: '[[1,1],[2,1]]',
    },
    {
      input: 'head = [[3,null],[3,0],[3,null]]',
      output: '[[3,null],[3,0],[3,null]]',
    },
  ],
  constraints: [
    '0 <= n <= 1000',
    '-10^4 <= Node.val <= 10^4',
    'Node.random is null or is pointing to some node in the linked list.',
  ],
  functionSignature: `function copyRandomList(head) {\n  \n}`,
  testCases: [
    {
      input: [[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]],
      expected: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]],
      label: 'five nodes with random pointers',
    },
    {
      input: [[[1, 1], [2, 1]]],
      expected: [[1, 1], [2, 1]],
      label: 'two nodes pointing to each other',
    },
    {
      input: [[[3, null], [3, 0], [3, null]]],
      expected: [[3, null], [3, 0], [3, null]],
      label: 'three nodes same value',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty list',
    },
  ],
};

export const addTwoNumbers: Problem = {
  id: 'add-two-numbers',
  neetcodeId: 40,
  title: 'Add Two Numbers',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not have leading zeros, except the number 0 itself.`,
  examples: [
    {
      input: 'l1 = [2,4,3], l2 = [5,6,4]',
      output: '[7,0,8]',
      explanation: '342 + 465 = 807.',
    },
    {
      input: 'l1 = [0], l2 = [0]',
      output: '[0]',
    },
    {
      input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
      output: '[8,9,9,9,0,0,0,1]',
    },
  ],
  constraints: [
    'The number of nodes in each linked list is in the range [1, 100].',
    '0 <= Node.val <= 9',
    'It is guaranteed that the list represents a number that does not have leading zeros.',
  ],
  functionSignature: `function addTwoNumbers(l1, l2) {\n  \n}`,
  testCases: [
    { input: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8], label: '342 + 465 = 807' },
    { input: [[0], [0]], expected: [0], label: '0 + 0' },
    { input: [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]], expected: [8, 9, 9, 9, 0, 0, 0, 1], label: 'carry into new digit' },
    { input: [[1], [9, 9]], expected: [0, 0, 1], label: '1 + 99 = 100' },
  ],
};

export const linkedListCycle: Problem = {
  id: 'linked-list-cycle',
  neetcodeId: 41,
  title: 'Linked List Cycle',
  category: 'Linked List',
  difficulty: 'Easy',
  description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.`,
  examples: [
    {
      input: 'head = [3,2,0,-4], pos = 1',
      output: 'true',
      explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).',
    },
    {
      input: 'head = [1,2], pos = 0',
      output: 'true',
      explanation: 'There is a cycle in the linked list, where the tail connects to the 0th node.',
    },
    {
      input: 'head = [1], pos = -1',
      output: 'false',
      explanation: 'There is no cycle in the linked list.',
    },
  ],
  constraints: [
    'The number of the nodes in the list is in the range [0, 10^4].',
    '-10^5 <= Node.val <= 10^5',
    'pos is -1 or a valid index in the linked-list.',
  ],
  functionSignature: `function hasCycle(head) {\n  \n}`,
  testCases: [
    { input: [[3, 2, 0, -4], 1], expected: true, label: 'cycle at index 1' },
    { input: [[1, 2], 0], expected: true, label: 'cycle at index 0' },
    { input: [[1], -1], expected: false, label: 'no cycle single node' },
    { input: [[1, 2, 3], -1], expected: false, label: 'no cycle three nodes' },
  ],
};

export const findTheDuplicateNumber: Problem = {
  id: 'find-the-duplicate-number',
  neetcodeId: 42,
  title: 'Find the Duplicate Number',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.`,
  examples: [
    {
      input: 'nums = [1,3,4,2,2]',
      output: '2',
    },
    {
      input: 'nums = [3,1,3,4,2]',
      output: '3',
    },
  ],
  constraints: [
    '1 <= n <= 10^5',
    'nums.length == n + 1',
    '1 <= nums[i] <= n',
    'All the integers in nums appear only once except for precisely one integer which appears two or more times.',
  ],
  functionSignature: `function findDuplicate(nums) {\n  \n}`,
  testCases: [
    { input: [[1, 3, 4, 2, 2]], expected: 2, label: 'duplicate is 2' },
    { input: [[3, 1, 3, 4, 2]], expected: 3, label: 'duplicate is 3' },
    { input: [[1, 1]], expected: 1, label: 'smallest case' },
    { input: [[2, 2, 2, 2, 2]], expected: 2, label: 'all same' },
  ],
};

export const lruCache: Problem = {
  id: 'lru-cache',
  neetcodeId: 43,
  title: 'LRU Cache',
  category: 'Linked List',
  difficulty: 'Medium',
  description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
  examples: [
    {
      input: `["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]`,
      output: '[null,null,null,1,null,-1,null,-1,3,4]',
      explanation: `LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4`,
    },
  ],
  constraints: [
    '1 <= capacity <= 3000',
    '0 <= key <= 10^4',
    '0 <= value <= 10^5',
    'At most 2 * 10^5 calls will be made to get and put.',
  ],
  functionSignature: `class LRUCache {\n  constructor(capacity) {\n    \n  }\n\n  get(key) {\n    \n  }\n\n  put(key, value) {\n    \n  }\n}`,
  testCases: [
    {
      input: [
        2,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['get', 1],
          ['put', 3, 3],
          ['get', 2],
          ['put', 4, 4],
          ['get', 1],
          ['get', 3],
          ['get', 4],
        ],
      ],
      expected: [null, null, 1, null, -1, null, -1, 3, 4],
      label: 'standard LRU eviction sequence',
    },
    {
      input: [
        1,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['get', 1],
          ['get', 2],
        ],
      ],
      expected: [null, null, -1, 2],
      label: 'capacity 1 evicts on second put',
    },
    {
      input: [
        2,
        [
          ['put', 1, 10],
          ['get', 1],
          ['put', 1, 20],
          ['get', 1],
        ],
      ],
      expected: [null, 10, null, 20],
      label: 'update existing key',
    },
    {
      input: [
        2,
        [
          ['get', 1],
        ],
      ],
      expected: [-1],
      label: 'get from empty cache',
    },
  ],
};

export const mergeKSortedLists: Problem = {
  id: 'merge-k-sorted-lists',
  neetcodeId: 44,
  title: 'Merge K Sorted Lists',
  category: 'Linked List',
  difficulty: 'Hard',
  description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
  examples: [
    {
      input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
      output: '[1,1,2,3,4,4,5,6]',
      explanation: 'The linked-lists are:\n1->4->5\n1->3->4\n2->6\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6',
    },
    { input: 'lists = []', output: '[]' },
    { input: 'lists = [[]]', output: '[]' },
  ],
  constraints: [
    'k == lists.length',
    '0 <= k <= 10^4',
    '0 <= lists[i].length <= 500',
    '-10^4 <= lists[i][j] <= 10^4',
    'lists[i] is sorted in ascending order.',
    'The sum of lists[i].length will not exceed 10^4.',
  ],
  functionSignature: `function mergeKLists(lists) {\n  \n}`,
  testCases: [
    { input: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6], label: 'three lists' },
    { input: [[]], expected: [], label: 'empty input' },
    { input: [[[]]], expected: [], label: 'single empty list' },
    { input: [[[1], [0]]], expected: [0, 1], label: 'two single-node lists' },
  ],
};

export const reverseNodesInKGroup: Problem = {
  id: 'reverse-nodes-in-k-group',
  neetcodeId: 45,
  title: 'Reverse Nodes in k-Group',
  category: 'Linked List',
  difficulty: 'Hard',
  description: `Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.`,
  examples: [
    {
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[2,1,4,3,5]',
    },
    {
      input: 'head = [1,2,3,4,5], k = 3',
      output: '[3,2,1,4,5]',
    },
  ],
  constraints: [
    'The number of nodes in the list is n.',
    '1 <= k <= n <= 5000',
    '0 <= Node.val <= 1000',
  ],
  functionSignature: `function reverseKGroup(head, k) {\n  \n}`,
  testCases: [
    { input: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5], label: 'k=2 odd length' },
    { input: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5], label: 'k=3 remainder left' },
    { input: [[1, 2, 3, 4], 2], expected: [2, 1, 4, 3], label: 'k=2 even length' },
    { input: [[1], 1], expected: [1], label: 'k=1 single node' },
  ],
};

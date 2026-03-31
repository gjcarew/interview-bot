import { Problem } from '../../../src/types';

export const invertBinaryTree: Problem = {
  id: 'invert-binary-tree',
  neetcodeId: 46,
  title: 'Invert Binary Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given the root of a binary tree, invert the tree, and return its root.`,
  examples: [
    {
      input: 'root = [4,2,7,1,3,6,9]',
      output: '[4,7,2,9,6,3,1]',
    },
    {
      input: 'root = [2,1,3]',
      output: '[2,3,1]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 100].',
    '-100 <= Node.val <= 100',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  
}`,
  testCases: [
    {
      input: [[4, 2, 7, 1, 3, 6, 9]],
      expected: [4, 7, 2, 9, 6, 3, 1],
      label: 'full tree',
    },
    {
      input: [[2, 1, 3]],
      expected: [2, 3, 1],
      label: 'three nodes',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty tree',
    },
    {
      input: [[1]],
      expected: [1],
      label: 'single node',
    },
  ],
};

export const maximumDepthOfBinaryTree: Problem = {
  id: 'maximum-depth-of-binary-tree',
  neetcodeId: 47,
  title: 'Maximum Depth of Binary Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
    },
    {
      input: 'root = [1,null,2]',
      output: '2',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '-100 <= Node.val <= 100',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  
}`,
  testCases: [
    {
      input: [[3, 9, 20, null, null, 15, 7]],
      expected: 3,
      label: 'three levels',
    },
    {
      input: [[1, null, 2]],
      expected: 2,
      label: 'right-skewed two levels',
    },
    {
      input: [[]],
      expected: 0,
      label: 'empty tree',
    },
    {
      input: [[1]],
      expected: 1,
      label: 'single node',
    },
  ],
};

export const diameterOfBinaryTree: Problem = {
  id: 'diameter-of-binary-tree',
  neetcodeId: 48,
  title: 'Diameter of Binary Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.`,
  examples: [
    {
      input: 'root = [1,2,3,4,5]',
      output: '3',
      explanation: '3 is the length of the path [4,2,1,3] or [5,2,1,3].',
    },
    {
      input: 'root = [1,2]',
      output: '1',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-100 <= Node.val <= 100',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  
}`,
  testCases: [
    {
      input: [[1, 2, 3, 4, 5]],
      expected: 3,
      label: 'path through root',
    },
    {
      input: [[1, 2]],
      expected: 1,
      label: 'two nodes',
    },
    {
      input: [[1]],
      expected: 0,
      label: 'single node',
    },
    {
      input: [[1, 2, null, 3, null, 4]],
      expected: 3,
      label: 'left-skewed chain',
    },
  ],
};

export const balancedBinaryTree: Problem = {
  id: 'balanced-binary-tree',
  neetcodeId: 49,
  title: 'Balanced Binary Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.`,
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: 'true',
    },
    {
      input: 'root = [1,2,2,3,3,null,null,4,4]',
      output: 'false',
    },
    {
      input: 'root = []',
      output: 'true',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000].',
    '-10^4 <= Node.val <= 10^4',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isBalanced(root) {
  
}`,
  testCases: [
    {
      input: [[3, 9, 20, null, null, 15, 7]],
      expected: true,
      label: 'balanced tree',
    },
    {
      input: [[1, 2, 2, 3, 3, null, null, 4, 4]],
      expected: false,
      label: 'unbalanced — left subtree too deep',
    },
    {
      input: [[]],
      expected: true,
      label: 'empty tree',
    },
    {
      input: [[1, 2, null, 3]],
      expected: false,
      label: 'left-skewed chain',
    },
  ],
};

export const sameTree: Problem = {
  id: 'same-tree',
  neetcodeId: 50,
  title: 'Same Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.`,
  examples: [
    {
      input: 'p = [1,2,3], q = [1,2,3]',
      output: 'true',
    },
    {
      input: 'p = [1,2], q = [1,null,2]',
      output: 'false',
    },
    {
      input: 'p = [1,2,1], q = [1,1,2]',
      output: 'false',
    },
  ],
  constraints: [
    'The number of nodes in both trees is in the range [0, 100].',
    '-10^4 <= Node.val <= 10^4',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  
}`,
  testCases: [
    {
      input: [[1, 2, 3], [1, 2, 3]],
      expected: true,
      label: 'identical trees',
    },
    {
      input: [[1, 2], [1, null, 2]],
      expected: false,
      label: 'different structure',
    },
    {
      input: [[1, 2, 1], [1, 1, 2]],
      expected: false,
      label: 'different values',
    },
    {
      input: [[], []],
      expected: true,
      label: 'both empty',
    },
  ],
};

export const subtreeOfAnotherTree: Problem = {
  id: 'subtree-of-another-tree',
  neetcodeId: 51,
  title: 'Subtree of Another Tree',
  category: 'Trees',
  difficulty: 'Easy',
  description: `Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.`,
  examples: [
    {
      input: 'root = [3,4,5,1,2], subRoot = [4,1,2]',
      output: 'true',
    },
    {
      input: 'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]',
      output: 'false',
      explanation: 'The subtree rooted at 4 in the main tree has an extra left child 0, so it does not match subRoot.',
    },
  ],
  constraints: [
    'The number of nodes in the root tree is in the range [1, 2000].',
    'The number of nodes in the subRoot tree is in the range [1, 1000].',
    '-10^4 <= root.val <= 10^4',
    '-10^4 <= subRoot.val <= 10^4',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSubtree(root, subRoot) {
  
}`,
  testCases: [
    {
      input: [[3, 4, 5, 1, 2], [4, 1, 2]],
      expected: true,
      label: 'subtree exists',
    },
    {
      input: [[3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]],
      expected: false,
      label: 'subtree has extra node',
    },
    {
      input: [[1, 1], [1]],
      expected: true,
      label: 'leaf matches subRoot',
    },
    {
      input: [[1, 2, 3], [1, 2]],
      expected: false,
      label: 'partial match not a subtree',
    },
  ],
};

export const lowestCommonAncestorOfBST: Problem = {
  id: 'lowest-common-ancestor-of-a-bst',
  neetcodeId: 52,
  title: 'Lowest Common Ancestor of a Binary Search Tree',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."`,
  examples: [
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8',
      output: '6',
      explanation: 'The LCA of nodes 2 and 8 is 6.',
    },
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4',
      output: '2',
      explanation: 'The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.',
    },
    {
      input: 'root = [2,1,3], p = 1, q = 3',
      output: '2',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^5].',
    '-10^9 <= Node.val <= 10^9',
    'All Node.val are unique.',
    'p != q',
    'p and q will exist in the BST.',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(root, p, q) {
  
}`,
  testCases: [
    {
      input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8],
      expected: 6,
      label: 'LCA is root',
    },
    {
      input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4],
      expected: 2,
      label: 'p is ancestor of q',
    },
    {
      input: [[2, 1, 3], 1, 3],
      expected: 2,
      label: 'LCA is root of small tree',
    },
    {
      input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 7, 9],
      expected: 8,
      label: 'both nodes in right subtree',
    },
  ],
};

export const binaryTreeLevelOrderTraversal: Problem = {
  id: 'binary-tree-level-order-traversal',
  neetcodeId: 53,
  title: 'Binary Tree Level Order Traversal',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000].',
    '-1000 <= Node.val <= 1000',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  
}`,
  testCases: [
    {
      input: [[3, 9, 20, null, null, 15, 7]],
      expected: [[3], [9, 20], [15, 7]],
      label: 'three levels with null',
    },
    {
      input: [[1]],
      expected: [[1]],
      label: 'single node',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty tree',
    },
    {
      input: [[1, 2, 3, 4, 5]],
      expected: [[1], [2, 3], [4, 5]],
      label: 'perfect tree three levels',
    },
  ],
};

export const binaryTreeRightSideView: Problem = {
  id: 'binary-tree-right-side-view',
  neetcodeId: 54,
  title: 'Binary Tree Right Side View',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.`,
  examples: [
    {
      input: 'root = [1,2,3,null,5,null,4]',
      output: '[1,3,4]',
    },
    {
      input: 'root = [1,null,3]',
      output: '[1,3]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 100].',
    '-100 <= Node.val <= 100',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function rightSideView(root) {
  
}`,
  testCases: [
    {
      input: [[1, 2, 3, null, 5, null, 4]],
      expected: [1, 3, 4],
      label: 'rightmost visible at each level',
    },
    {
      input: [[1, null, 3]],
      expected: [1, 3],
      label: 'right-only children',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty tree',
    },
    {
      input: [[1, 2, 3, 4]],
      expected: [1, 3, 4],
      label: 'left leaf visible from right',
    },
  ],
};

export const countGoodNodesInBinaryTree: Problem = {
  id: 'count-good-nodes-in-binary-tree',
  neetcodeId: 55,
  title: 'Count Good Nodes in Binary Tree',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X's value.

Return the number of good nodes in the binary tree.`,
  examples: [
    {
      input: 'root = [3,1,4,3,null,1,5]',
      output: '4',
      explanation: 'Nodes in blue are good. Root Node (3) is always a good node. Node 4 -> (3,4) is the maximum value in the path starting from the root. Node 3 -> (3,1,3) is the maximum value in the path. Node 5 -> (3,4,5) is the maximum value in the path.',
    },
    {
      input: 'root = [3,3,null,4,2]',
      output: '3',
      explanation: 'Node 2 -> (3,3,2) is not good, because "3" is higher than it.',
    },
    {
      input: 'root = [1]',
      output: '1',
      explanation: 'Root is considered as good.',
    },
  ],
  constraints: [
    'The number of nodes in the binary tree is in the range [1, 10^5].',
    'Each node\'s value is between [-10^4, 10^4].',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function goodNodes(root) {
  
}`,
  testCases: [
    {
      input: [[3, 1, 4, 3, null, 1, 5]],
      expected: 4,
      label: 'four good nodes',
    },
    {
      input: [[3, 3, null, 4, 2]],
      expected: 3,
      label: 'node 2 not good',
    },
    {
      input: [[1]],
      expected: 1,
      label: 'single node always good',
    },
    {
      input: [[2, null, 4, 10, 8, null, null, 4]],
      expected: 4,
      label: 'right-heavy tree',
    },
  ],
};

export const validateBinarySearchTree: Problem = {
  id: 'validate-binary-search-tree',
  neetcodeId: 56,
  title: 'Validate Binary Search Tree',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.`,
  examples: [
    {
      input: 'root = [2,1,3]',
      output: 'true',
    },
    {
      input: 'root = [5,1,4,null,null,3,6]',
      output: 'false',
      explanation: 'The root node\'s value is 5 but its right child\'s value is 4.',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  
}`,
  testCases: [
    {
      input: [[2, 1, 3]],
      expected: true,
      label: 'valid BST',
    },
    {
      input: [[5, 1, 4, null, null, 3, 6]],
      expected: false,
      label: 'right child smaller than root',
    },
    {
      input: [[1]],
      expected: true,
      label: 'single node',
    },
    {
      input: [[5, 4, 6, null, null, 3, 7]],
      expected: false,
      label: 'node 3 violates BST property across levels',
    },
  ],
};

export const kthSmallestElementInBST: Problem = {
  id: 'kth-smallest-element-in-a-bst',
  neetcodeId: 57,
  title: 'Kth Smallest Element in a BST',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.`,
  examples: [
    {
      input: 'root = [3,1,4,null,2], k = 1',
      output: '1',
    },
    {
      input: 'root = [5,3,6,2,4,null,null,1], k = 3',
      output: '3',
    },
  ],
  constraints: [
    'The number of nodes in the tree is n.',
    '1 <= k <= n <= 10^4',
    '0 <= Node.val <= 10^4',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  
}`,
  testCases: [
    {
      input: [[3, 1, 4, null, 2], 1],
      expected: 1,
      label: 'smallest element',
    },
    {
      input: [[5, 3, 6, 2, 4, null, null, 1], 3],
      expected: 3,
      label: 'third smallest',
    },
    {
      input: [[1], 1],
      expected: 1,
      label: 'single node k=1',
    },
    {
      input: [[3, 1, 4, null, 2], 2],
      expected: 2,
      label: 'second smallest',
    },
  ],
};

export const constructBinaryTreeFromPreorderAndInorder: Problem = {
  id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
  neetcodeId: 58,
  title: 'Construct Binary Tree from Preorder and Inorder Traversal',
  category: 'Trees',
  difficulty: 'Medium',
  description: `Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.`,
  examples: [
    {
      input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]',
      output: '[3,9,20,null,null,15,7]',
    },
    {
      input: 'preorder = [1,2], inorder = [2,1]',
      output: '[1,2]',
      explanation: 'The tree has root 1 with left child 2.',
    },
    {
      input: 'preorder = [-1], inorder = [-1]',
      output: '[-1]',
    },
  ],
  constraints: [
    '1 <= preorder.length <= 3000',
    'inorder.length == preorder.length',
    '-3000 <= preorder[i], inorder[i] <= 3000',
    'preorder and inorder consist of unique values.',
    'Each value of inorder also appears in preorder.',
    'preorder is guaranteed to be the preorder traversal of the tree.',
    'inorder is guaranteed to be the inorder traversal of the tree.',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(preorder, inorder) {
  
}`,
  testCases: [
    {
      input: [[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]],
      expected: [3, 9, 20, null, null, 15, 7],
      label: 'standard example',
    },
    {
      input: [[1, 2], [2, 1]],
      expected: [1, 2],
      label: 'left child only',
    },
    {
      input: [[-1], [-1]],
      expected: [-1],
      label: 'single node',
    },
    {
      input: [[1, 2, 3], [2, 1, 3]],
      expected: [1, 2, 3],
      label: 'root with both children',
    },
  ],
};

export const binaryTreeMaximumPathSum: Problem = {
  id: 'binary-tree-maximum-path-sum',
  neetcodeId: 59,
  title: 'Binary Tree Maximum Path Sum',
  category: 'Trees',
  difficulty: 'Hard',
  description: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.`,
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '6',
      explanation: 'The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.',
    },
    {
      input: 'root = [-10,9,20,null,null,15,7]',
      output: '42',
      explanation: 'The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [1, 3 * 10^4].',
    '-1000 <= Node.val <= 1000',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  
}`,
  testCases: [
    {
      input: [[1, 2, 3]],
      expected: 6,
      label: 'path through root',
    },
    {
      input: [[-10, 9, 20, null, null, 15, 7]],
      expected: 42,
      label: 'path in right subtree',
    },
    {
      input: [[-3]],
      expected: -3,
      label: 'single negative node',
    },
    {
      input: [[2, -1]],
      expected: 2,
      label: 'ignore negative child',
    },
  ],
};

export const serializeAndDeserializeBinaryTree: Problem = {
  id: 'serialize-and-deserialize-binary-tree',
  neetcodeId: 60,
  title: 'Serialize and Deserialize Binary Tree',
  category: 'Trees',
  difficulty: 'Hard',
  description: `Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Implement the Codec class:
- \`Codec.serialize(root)\` — encodes a tree to a single string.
- \`Codec.deserialize(data)\` — decodes your encoded data to tree.`,
  examples: [
    {
      input: 'root = [1,2,3,null,null,4,5]',
      output: '[1,2,3,null,null,4,5]',
      explanation: 'The tree is serialized to a string, then deserialized back to the original structure.',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '-1000 <= Node.val <= 1000',
  ],
  functionSignature: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Codec {
  serialize(root) {
    
  }

  deserialize(data) {
    
  }
}`,
  testCases: [
    {
      input: [[1, 2, 3, null, null, 4, 5]],
      expected: [1, 2, 3, null, null, 4, 5],
      label: 'standard tree round-trip',
    },
    {
      input: [[1]],
      expected: [1],
      label: 'single node round-trip',
    },
    {
      input: [[]],
      expected: [],
      label: 'empty tree round-trip',
    },
    {
      input: [[1, 2, null, 3]],
      expected: [1, 2, null, 3],
      label: 'left-skewed tree round-trip',
    },
  ],
};

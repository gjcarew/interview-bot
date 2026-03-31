import { Problem } from '../../../src/types';

export const numberOfIslands: Problem = {
  id: 'number-of-islands',
  neetcodeId: 80,
  title: 'Number of Islands',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
  examples: [
    {
      input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
      output: '1',
    },
    {
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
    },
  ],
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 300',
    'grid[i][j] is \'0\' or \'1\'',
  ],
  functionSignature: `function numIslands(grid) {\n  \n}`,
  testCases: [
    {
      input: [[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]],
      expected: 1,
    },
    {
      input: [[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]],
      expected: 3,
    },
    {
      input: [[['1']]],
      expected: 1,
    },
    {
      input: [[['0']]],
      expected: 0,
    },
  ],
};

export const cloneGraph: Problem = {
  id: 'clone-graph',
  neetcodeId: 81,
  title: 'Clone Graph',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

Test case format: The input is an adjacency list, where each list describes the set of neighbors of a node at that index.`,
  examples: [
    {
      input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
      output: '[[2,4],[1,3],[2,4],[1,3]]',
      explanation: 'The graph has 4 nodes. Node 1\'s neighbors are 2 and 4. Node 2\'s neighbors are 1 and 3. Node 3\'s neighbors are 2 and 4. Node 4\'s neighbors are 1 and 3.',
    },
    {
      input: 'adjList = [[]]',
      output: '[[]]',
      explanation: 'The graph has one node with no neighbors.',
    },
    {
      input: 'adjList = []',
      output: '[]',
      explanation: 'The graph is empty (null node).',
    },
  ],
  constraints: [
    'The number of nodes in the graph is in the range [0, 100].',
    '1 <= Node.val <= 100',
    'Node.val is unique for each node.',
    'There are no repeated edges and no self-loops in the graph.',
    'The Graph is connected, and all nodes can be visited starting from the given node.',
  ],
  functionSignature: `function cloneGraph(node) {\n  \n}`,
  testCases: [
    {
      input: [{ val: 1, neighbors: [{ val: 2, neighbors: [] }, { val: 4, neighbors: [] }] }],
      expected: 1,
      label: 'Clone returns node with val 1',
    },
    {
      input: [null],
      expected: null,
      label: 'Null input returns null',
    },
    {
      input: [{ val: 1, neighbors: [] }],
      expected: 1,
      label: 'Single node with no neighbors',
    },
  ],
};

export const maxAreaOfIsland: Problem = {
  id: 'max-area-of-island',
  neetcodeId: 82,
  title: 'Max Area of Island',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.`,
  examples: [
    {
      input: 'grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]',
      output: '6',
      explanation: 'The answer is not 11, because the island must be connected 4-directionally.',
    },
    {
      input: 'grid = [[0,0,0,0,0,0,0,0]]',
      output: '0',
    },
  ],
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 50',
    'grid[i][j] is either 0 or 1',
  ],
  functionSignature: `function maxAreaOfIsland(grid) {\n  \n}`,
  testCases: [
    {
      input: [[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]],
      expected: 6,
    },
    {
      input: [[[0,0,0,0,0,0,0,0]]],
      expected: 0,
    },
    {
      input: [[[1,1],[1,0]]],
      expected: 3,
    },
    {
      input: [[[1]]],
      expected: 1,
    },
  ],
};

export const pacificAtlanticWaterFlow: Problem = {
  id: 'pacific-atlantic-water-flow',
  neetcodeId: 83,
  title: 'Pacific Atlantic Water Flow',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.`,
  examples: [
    {
      input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
      output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
    },
    {
      input: 'heights = [[1]]',
      output: '[[0,0]]',
    },
  ],
  constraints: [
    'm == heights.length',
    'n == heights[r].length',
    '1 <= m, n <= 200',
    '0 <= heights[r][c] <= 10^5',
  ],
  functionSignature: `function pacificAtlantic(heights) {\n  \n}`,
  testCases: [
    {
      input: [[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]],
      expected: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]],
    },
    {
      input: [[[1]]],
      expected: [[0,0]],
    },
    {
      input: [[[1,1],[1,1],[1,1]]],
      expected: [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]],
    },
    {
      input: [[[3,3,3],[3,1,3],[0,2,4]]],
      expected: [[0,0],[0,1],[0,2],[1,0],[1,2],[2,2]],
    },
  ],
};

export const surroundedRegions: Problem = {
  id: 'surrounded-regions',
  neetcodeId: 84,
  title: 'Surrounded Regions',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You are given an m x n matrix board containing letters 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Note: A region is not surrounded if any 'O' in the region is on the border of the board.`,
  examples: [
    {
      input: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
      output: '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
      explanation: 'Notice that an \'O\' should not be flipped if it is on the border, or if it is adjacent to an \'O\' that should not be flipped. The bottom \'O\' is on the border, so it is not flipped. The other three \'O\'s are surrounded by \'X\'s, so they are flipped.',
    },
    {
      input: 'board = [["X"]]',
      output: '[["X"]]',
    },
  ],
  constraints: [
    'm == board.length',
    'n == board[i].length',
    '1 <= m, n <= 200',
    'board[i][j] is \'X\' or \'O\'',
  ],
  functionSignature: `function solve(board) {\n  \n}`,
  testCases: [
    {
      input: [[['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]],
      expected: [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']],
    },
    {
      input: [[['X']]],
      expected: [['X']],
    },
    {
      input: [[['O','O'],['O','O']]],
      expected: [['O','O'],['O','O']],
    },
    {
      input: [[['X','O','X'],['O','X','O'],['X','O','X']]],
      expected: [['X','O','X'],['O','X','O'],['X','O','X']],
    },
  ],
};

export const rottingOranges: Problem = {
  id: 'rotting-oranges',
  neetcodeId: 85,
  title: 'Rotting Oranges',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You are given an m x n grid where each cell can have one of three values:
- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.`,
  examples: [
    {
      input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]',
      output: '4',
    },
    {
      input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]',
      output: '-1',
      explanation: 'The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.',
    },
    {
      input: 'grid = [[0,2]]',
      output: '0',
      explanation: 'Since there are already no fresh oranges at minute 0, the answer is just 0.',
    },
  ],
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10',
    'grid[i][j] is 0, 1, or 2',
  ],
  functionSignature: `function orangesRotting(grid) {\n  \n}`,
  testCases: [
    {
      input: [[[2,1,1],[1,1,0],[0,1,1]]],
      expected: 4,
    },
    {
      input: [[[2,1,1],[0,1,1],[1,0,1]]],
      expected: -1,
    },
    {
      input: [[[0,2]]],
      expected: 0,
    },
    {
      input: [[[1]]],
      expected: -1,
    },
  ],
};

export const wallsAndGates: Problem = {
  id: 'walls-and-gates',
  neetcodeId: 86,
  title: 'Walls and Gates',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You are given an m x n grid rooms initialized with these three possible values:
- -1 representing a wall or an obstacle,
- 0 representing a gate,
- INF (2147483647) representing an empty room.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.`,
  examples: [
    {
      input: 'rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]',
      output: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]',
    },
    {
      input: 'rooms = [[-1]]',
      output: '[[-1]]',
    },
  ],
  constraints: [
    'm == rooms.length',
    'n == rooms[i].length',
    '1 <= m, n <= 250',
    'rooms[i][j] is -1, 0, or 2^31 - 1',
  ],
  functionSignature: `function wallsAndGates(rooms) {\n  \n}`,
  testCases: [
    {
      input: [[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]],
      expected: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]],
    },
    {
      input: [[[-1]]],
      expected: [[-1]],
    },
    {
      input: [[[0]]],
      expected: [[0]],
    },
    {
      input: [[[2147483647,2147483647],[2147483647,0]]],
      expected: [[2,1],[1,0]],
    },
  ],
};

export const courseSchedule: Problem = {
  id: 'course-schedule',
  neetcodeId: 87,
  title: 'Course Schedule',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.`,
  examples: [
    {
      input: 'numCourses = 2, prerequisites = [[1,0]]',
      output: 'true',
      explanation: 'There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.',
    },
    {
      input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
      output: 'false',
      explanation: 'There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.',
    },
  ],
  constraints: [
    '1 <= numCourses <= 2000',
    '0 <= prerequisites.length <= 5000',
    'prerequisites[i].length == 2',
    '0 <= ai, bi < numCourses',
    'All the pairs prerequisites[i] are unique.',
  ],
  functionSignature: `function canFinish(numCourses, prerequisites) {\n  \n}`,
  testCases: [
    {
      input: [2, [[1,0]]],
      expected: true,
    },
    {
      input: [2, [[1,0],[0,1]]],
      expected: false,
    },
    {
      input: [1, []],
      expected: true,
    },
    {
      input: [5, [[1,4],[2,4],[3,1],[3,2]]],
      expected: true,
    },
  ],
};

export const courseScheduleII: Problem = {
  id: 'course-schedule-ii',
  neetcodeId: 88,
  title: 'Course Schedule II',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.`,
  examples: [
    {
      input: 'numCourses = 2, prerequisites = [[1,0]]',
      output: '[0,1]',
      explanation: 'There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].',
    },
    {
      input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
      output: '[0,2,1,3]',
      explanation: 'There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct order is [0,1,2,3]. Another correct order is [0,2,1,3].',
    },
    {
      input: 'numCourses = 1, prerequisites = []',
      output: '[0]',
    },
  ],
  constraints: [
    '1 <= numCourses <= 2000',
    '0 <= prerequisites.length <= numCourses * (numCourses - 1)',
    'prerequisites[i].length == 2',
    '0 <= ai, bi < numCourses',
    'All the pairs [ai, bi] are distinct.',
  ],
  functionSignature: `function findOrder(numCourses, prerequisites) {\n  \n}`,
  testCases: [
    {
      input: [2, [[1,0]]],
      expected: [0,1],
    },
    {
      input: [4, [[1,0],[2,0],[3,1],[3,2]]],
      expected: [0,1,2,3],
      label: 'One valid topological order',
    },
    {
      input: [1, []],
      expected: [0],
    },
    {
      input: [2, [[1,0],[0,1]]],
      expected: [],
      label: 'Cycle — impossible',
    },
  ],
};

export const redundantConnection: Problem = {
  id: 'redundant-connection',
  neetcodeId: 89,
  title: 'Redundant Connection',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.`,
  examples: [
    {
      input: 'edges = [[1,2],[1,3],[2,3]]',
      output: '[2,3]',
    },
    {
      input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]',
      output: '[1,4]',
    },
  ],
  constraints: [
    'n == edges.length',
    '3 <= n <= 1000',
    'edges[i].length == 2',
    '1 <= ai < bi <= edges.length',
    'ai != bi',
    'There are no repeated edges.',
    'The given graph is connected.',
  ],
  functionSignature: `function findRedundantConnection(edges) {\n  \n}`,
  testCases: [
    {
      input: [[[1,2],[1,3],[2,3]]],
      expected: [2,3],
    },
    {
      input: [[[1,2],[2,3],[3,4],[1,4],[1,5]]],
      expected: [1,4],
    },
    {
      input: [[[1,2],[2,3],[1,3]]],
      expected: [1,3],
    },
    {
      input: [[[1,2],[1,3],[1,4],[3,4]]],
      expected: [3,4],
    },
  ],
};

export const numberOfConnectedComponents: Problem = {
  id: 'number-of-connected-components-in-an-undirected-graph',
  neetcodeId: 90,
  title: 'Number of Connected Components in an Undirected Graph',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.`,
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
      output: '2',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
      output: '1',
    },
  ],
  constraints: [
    '1 <= n <= 2000',
    '1 <= edges.length <= 5000',
    'edges[i].length == 2',
    '0 <= ai <= bi < n',
    'ai != bi',
    'There are no repeated edges.',
  ],
  functionSignature: `function countComponents(n, edges) {\n  \n}`,
  testCases: [
    {
      input: [5, [[0,1],[1,2],[3,4]]],
      expected: 2,
    },
    {
      input: [5, [[0,1],[1,2],[2,3],[3,4]]],
      expected: 1,
    },
    {
      input: [4, []],
      expected: 4,
      label: 'No edges — all isolated nodes',
    },
    {
      input: [3, [[0,1],[0,2]]],
      expected: 1,
    },
  ],
};

export const graphValidTree: Problem = {
  id: 'graph-valid-tree',
  neetcodeId: 91,
  title: 'Graph Valid Tree',
  category: 'Graphs',
  difficulty: 'Medium',
  description: `You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

A valid tree must: be fully connected (all nodes reachable) and contain no cycles.`,
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
      output: 'true',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
      output: 'false',
      explanation: 'The edge [1,3] creates a cycle.',
    },
  ],
  constraints: [
    '1 <= n <= 2000',
    '0 <= edges.length <= 5000',
    'edges[i].length == 2',
    '0 <= ai, bi < n',
    'ai != bi',
    'There are no self-loops or repeated edges.',
  ],
  functionSignature: `function validTree(n, edges) {\n  \n}`,
  testCases: [
    {
      input: [5, [[0,1],[0,2],[0,3],[1,4]]],
      expected: true,
    },
    {
      input: [5, [[0,1],[1,2],[2,3],[1,3],[1,4]]],
      expected: false,
    },
    {
      input: [1, []],
      expected: true,
      label: 'Single node is a valid tree',
    },
    {
      input: [3, [[0,1],[2,1]]],
      expected: true,
    },
    {
      input: [3, [[0,1],[1,2],[2,0]]],
      expected: false,
      label: 'Cycle of 3 nodes',
    },
  ],
};

export const wordLadder: Problem = {
  id: 'word-ladder',
  neetcodeId: 92,
  title: 'Word Ladder',
  category: 'Graphs',
  difficulty: 'Hard',
  description: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.`,
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
      output: '5',
      explanation: 'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.',
    },
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
      output: '0',
      explanation: 'The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.',
    },
  ],
  constraints: [
    '1 <= beginWord.length <= 10',
    'endWord.length == beginWord.length',
    '1 <= wordList.length <= 5000',
    'wordList[i].length == beginWord.length',
    'beginWord, endWord, and wordList[i] consist of lowercase English letters.',
    'beginWord != endWord',
    'All the words in wordList are unique.',
  ],
  functionSignature: `function ladderLength(beginWord, endWord, wordList) {\n  \n}`,
  testCases: [
    {
      input: ['hit', 'cog', ['hot','dot','dog','lot','log','cog']],
      expected: 5,
    },
    {
      input: ['hit', 'cog', ['hot','dot','dog','lot','log']],
      expected: 0,
    },
    {
      input: ['a', 'c', ['a','b','c']],
      expected: 2,
    },
    {
      input: ['hot', 'dog', ['hot','dog']],
      expected: 0,
      label: 'No intermediate word connecting hot to dog',
    },
  ],
};

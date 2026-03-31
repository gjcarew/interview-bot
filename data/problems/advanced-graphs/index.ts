import { Problem } from '../../../src/types';

export const reconstructItinerary: Problem = {
  id: 'reconstruct-itinerary',
  neetcodeId: 93,
  title: 'Reconstruct Itinerary',
  category: 'Advanced Graphs',
  difficulty: 'Hard',
  description: `You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets must be used once and only once. The journey must begin from "JFK". If there are multiple valid itineraries, return the itinerary that has the smallest lexical order when read as a single string.

You may assume all tickets form at least one valid itinerary. You must use DFS and Hierholzer's algorithm to find an Eulerian path.`,
  examples: [
    {
      input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
      output: '["JFK","MUC","LHR","SFO","SJC"]',
    },
    {
      input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
      output: '["JFK","ATL","JFK","SFO","ATL","SFO"]',
      explanation: 'Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.',
    },
  ],
  constraints: [
    '1 <= tickets.length <= 300',
    'tickets[i].length == 2',
    'fromi.length == 3',
    'toi.length == 3',
    'fromi and toi consist of uppercase English letters',
    'The given graph is guaranteed to have a valid itinerary',
  ],
  functionSignature: `function findItinerary(tickets) {\n  \n}`,
  testCases: [
    {
      input: [[['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]],
      expected: ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
      label: 'Single path itinerary',
    },
    {
      input: [[['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]],
      expected: ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
      label: 'Lexicographically smallest among multiple valid itineraries',
    },
    {
      input: [[['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']]],
      expected: ['JFK', 'NRT', 'JFK', 'KUL'],
      label: 'Must pick NRT before KUL to form valid path',
    },
    {
      input: [[['JFK', 'ATL'], ['ATL', 'JFK']]],
      expected: ['JFK', 'ATL', 'JFK'],
      label: 'Simple round trip',
    },
  ],
};

export const minCostConnectPoints: Problem = {
  id: 'min-cost-to-connect-all-points',
  neetcodeId: 94,
  title: 'Min Cost to Connect All Points',
  category: 'Advanced Graphs',
  difficulty: 'Medium',
  description: `You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the Manhattan distance between them: |xi - xj| + |yi - yj|.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.`,
  examples: [
    {
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'We can connect the points as shown above to get the minimum cost of 20. Notice that there is a unique path between every pair of points.',
    },
    {
      input: 'points = [[3,12],[-2,5],[-4,1]]',
      output: '18',
    },
  ],
  constraints: [
    '1 <= points.length <= 1000',
    '-10^6 <= xi, yi <= 10^6',
    'All pairs (xi, yi) are distinct',
  ],
  functionSignature: `function minCostConnectPoints(points) {\n  \n}`,
  testCases: [
    {
      input: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]],
      expected: 20,
      label: 'Five points forming MST of cost 20',
    },
    {
      input: [[[3, 12], [-2, 5], [-4, 1]]],
      expected: 18,
      label: 'Three points',
    },
    {
      input: [[[0, 0], [1, 1], [1, 0], [0, 1]]],
      expected: 3,
      label: 'Unit square corners',
    },
    {
      input: [[[0, 0]]],
      expected: 0,
      label: 'Single point — no edges needed',
    },
  ],
};

export const networkDelayTime: Problem = {
  id: 'network-delay-time',
  neetcodeId: 95,
  title: 'Network Delay Time',
  category: 'Advanced Graphs',
  difficulty: 'Medium',
  description: `You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.`,
  examples: [
    {
      input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2',
      output: '2',
    },
    {
      input: 'times = [[1,2,1]], n = 2, k = 1',
      output: '1',
    },
    {
      input: 'times = [[1,2,1]], n = 2, k = 2',
      output: '-1',
    },
  ],
  constraints: [
    '1 <= k <= n <= 100',
    '1 <= times.length <= 6000',
    'times[i].length == 3',
    '1 <= ui, vi <= n',
    'ui != vi',
    '0 <= wi <= 100',
    'All the pairs (ui, vi) are unique',
  ],
  functionSignature: `function networkDelayTime(times, n, k) {\n  \n}`,
  testCases: [
    {
      input: [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2],
      expected: 2,
      label: 'Signal reaches all 4 nodes in 2 time units',
    },
    {
      input: [[[1, 2, 1]], 2, 1],
      expected: 1,
      label: 'Direct edge to only other node',
    },
    {
      input: [[[1, 2, 1]], 2, 2],
      expected: -1,
      label: 'Source cannot reach node 1 — return -1',
    },
    {
      input: [[[1, 2, 9], [1, 3, 1], [3, 2, 1]], 3, 1],
      expected: 2,
      label: 'Shorter path via node 3 to node 2',
    },
  ],
};

export const swimInRisingWater: Problem = {
  id: 'swim-in-rising-water',
  neetcodeId: 96,
  title: 'Swim in Rising Water',
  category: 'Advanced Graphs',
  difficulty: 'Hard',
  description: `You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the bounds of the grid during your swim.

Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).`,
  examples: [
    {
      input: 'grid = [[0,2],[1,3]]',
      output: '3',
      explanation: 'At time 0, you are in grid location (0, 0). You cannot go anywhere yet because 4-directionally adjacent neighbors have a higher elevation than the current water level. At time 1, you can go to (1, 0) because the elevation is 1. At time 2 you cannot yet reach (0,1) or (1,1) since their elevation is 2 and 3. At time 3, you can swim to the bottom right corner (1, 1).',
    },
    {
      input: 'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]',
      output: '16',
      explanation: 'The final route is shown. We need to wait until time 16 so that (0, 4) and (4, 4) can be connected.',
    },
  ],
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 50',
    '0 <= grid[i][j] < n^2',
    'Each value grid[i][j] is unique',
  ],
  functionSignature: `function swimInWater(grid) {\n  \n}`,
  testCases: [
    {
      input: [[[0, 2], [1, 3]]],
      expected: 3,
      label: '2x2 grid — wait until t=3',
    },
    {
      input: [[[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]],
      expected: 16,
      label: '5x5 spiral grid — bottleneck at 16',
    },
    {
      input: [[[0]]],
      expected: 0,
      label: '1x1 grid — already at destination',
    },
    {
      input: [[[0, 1], [2, 3]]],
      expected: 3,
      label: '2x2 grid direct path blocked until t=3',
    },
  ],
};

export const alienDictionary: Problem = {
  id: 'alien-dictionary',
  neetcodeId: 97,
  title: 'Alien Dictionary',
  category: 'Advanced Graphs',
  difficulty: 'Hard',
  description: `There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in ascending order as they appear in this new language. If there is no solution, return "". If there are multiple solutions, return any one of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.`,
  examples: [
    {
      input: 'words = ["wrt","wrf","er","ett","rftt"]',
      output: '"wertf"',
    },
    {
      input: 'words = ["z","x"]',
      output: '"zx"',
    },
    {
      input: 'words = ["z","x","z"]',
      output: '""',
      explanation: 'The order is invalid, so return "".',
    },
  ],
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of only lowercase English letters',
    'All strings in words are unique',
  ],
  functionSignature: `function alienOrder(words) {\n  \n}`,
  testCases: [
    {
      input: [['wrt', 'wrf', 'er', 'ett', 'rftt']],
      expected: 'wertf',
      label: 'Classic five-word example',
    },
    {
      input: [['z', 'x']],
      expected: 'zx',
      label: 'Two single-character words',
    },
    {
      input: [['z', 'x', 'z']],
      expected: '',
      label: 'Cycle detected — return empty string',
    },
    {
      input: [['ab', 'adc']],
      expected: 'abcd',
      label: 'b comes before d derived from second characters',
    },
  ],
};

export const cheapestFlightsWithinKStops: Problem = {
  id: 'cheapest-flights-within-k-stops',
  neetcodeId: 98,
  title: 'Cheapest Flights Within K Stops',
  category: 'Advanced Graphs',
  difficulty: 'Medium',
  description: `There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

Given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.`,
  examples: [
    {
      input: 'n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1',
      output: '700',
      explanation: 'The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700. Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.',
    },
    {
      input: 'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1',
      output: '200',
      explanation: 'The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.',
    },
    {
      input: 'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0',
      output: '500',
      explanation: 'The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.',
    },
  ],
  constraints: [
    '1 <= n <= 100',
    '0 <= flights.length <= (n * (n - 1) / 2)',
    'flights[i].length == 3',
    '0 <= fromi, toi < n',
    'fromi != toi',
    '1 <= pricei <= 10^4',
    'There will not be any multiple flights between two cities',
    '0 <= k < n',
  ],
  functionSignature: `function findCheapestPrice(n, flights, src, dst, k) {\n  \n}`,
  testCases: [
    {
      input: [4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1],
      expected: 700,
      label: 'At most 1 stop — must take expensive direct leg to dst',
    },
    {
      input: [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1],
      expected: 200,
      label: 'Two hops cheaper than direct flight with k=1',
    },
    {
      input: [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0],
      expected: 500,
      label: 'No stops allowed — must take direct flight',
    },
    {
      input: [3, [[0, 1, 100], [1, 2, 100]], 0, 2, 0],
      expected: -1,
      label: 'No route within 0 stops — return -1',
    },
  ],
};

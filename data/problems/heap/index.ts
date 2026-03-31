import { Problem } from '../../../src/types';

export const kthLargestElementInStream: Problem = {
  id: 'kth-largest-element-in-a-stream',
  neetcodeId: 64,
  title: 'Kth Largest Element in a Stream',
  category: 'Heap / Priority Queue',
  difficulty: 'Easy',
  description: `Design a class to find the k-th largest element in a stream. Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

Implement the KthLargest class:
- KthLargest(int k, int[] nums) — Initializes the object with the integer k and the stream of integers nums.
- int add(int val) — Appends the integer val to the stream and returns the element representing the k-th largest element in the stream.`,
  examples: [
    {
      input: 'k = 3, nums = [4,5,8,2], add calls: [3,5,10,9,4]',
      output: '[4,5,5,8,8]',
      explanation:
        'After adding 3 the stream is [2,3,4,5,8] — 3rd largest is 4. After adding 5 it\'s [2,3,4,5,5,8] — 3rd largest is 5. And so on.',
    },
    {
      input: 'k = 1, nums = [], add calls: [-3,-2,-4,0,4]',
      output: '[-3,-2,-2,0,4]',
    },
  ],
  constraints: [
    '1 <= k <= 10^4',
    '0 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= val <= 10^4',
    'At most 10^4 calls will be made to add.',
    'It is guaranteed that there will be at least k elements in the array when you search for the k-th element.',
  ],
  functionSignature: `class KthLargest {
  constructor(k, nums) {
    
  }

  add(val) {
    
  }
}`,
  testCases: [
    {
      input: [3, [4, 5, 8, 2], [3, 5, 10, 9, 4]],
      expected: [4, 5, 5, 8, 8],
      label: 'k=3 with initial nums and multiple adds',
    },
    {
      input: [1, [], [-3, -2, -4, 0, 4]],
      expected: [-3, -2, -2, 0, 4],
      label: 'k=1 empty initial stream',
    },
    {
      input: [2, [0], [(-1), 1, (-2), (-4), 3]],
      expected: [-1, 0, 0, 0, 1],
      label: 'k=2 with zero in initial stream',
    },
    {
      input: [3, [5, -1], [2, 1, (-1), (-2), (-3)]],
      expected: [-1, 1, 1, 1, 1],
      label: 'k=3 mixed positive and negative',
    },
  ],
};

export const lastStoneWeight: Problem = {
  id: 'last-stone-weight',
  neetcodeId: 65,
  title: 'Last Stone Weight',
  category: 'Heap / Priority Queue',
  difficulty: 'Easy',
  description: `You are given an array of integers stones where stones[i] is the weight of the i-th stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
- If x == y, both stones are destroyed.
- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones remaining, return 0.`,
  examples: [
    {
      input: 'stones = [2,7,4,1,8,1]',
      output: '1',
      explanation:
        'We combine 7 and 8 to get 1, so the array converts to [2,4,1,1,1]. We combine 2 and 4 to get 2, so the array converts to [2,1,1,1]. We combine 2 and 1 to get 1, so the array converts to [1,1,1]. We combine 1 and 1 to get 0, so the array converts to [1]. That is the value of the last stone.',
    },
    {
      input: 'stones = [1]',
      output: '1',
    },
  ],
  constraints: [
    '1 <= stones.length <= 30',
    '1 <= stones[i] <= 1000',
  ],
  functionSignature: `function lastStoneWeight(stones) {\n  \n}`,
  testCases: [
    {
      input: [[2, 7, 4, 1, 8, 1]],
      expected: 1,
      label: 'example from problem',
    },
    {
      input: [[1]],
      expected: 1,
      label: 'single stone',
    },
    {
      input: [[3, 3]],
      expected: 0,
      label: 'two equal stones cancel',
    },
    {
      input: [[10, 4, 2, 10]],
      expected: 2,
      label: 'multiple collisions',
    },
  ],
};

export const kClosestPointsToOrigin: Problem = {
  id: 'k-closest-points-to-origin',
  neetcodeId: 66,
  title: 'K Closest Points to Origin',
  category: 'Heap / Priority Queue',
  difficulty: 'Medium',
  description: `Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., sqrt((x1 - x2)^2 + (y1 - y2)^2)).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).`,
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '[[-2,2]]',
      explanation:
        'The distance between (1, 3) and the origin is sqrt(10). The distance between (-2, 2) and the origin is sqrt(8). Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.',
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '[[3,3],[-2,4]]',
      explanation: 'The answer [[-2,4],[3,3]] would also be accepted.',
    },
  ],
  constraints: [
    '1 <= k <= points.length <= 10^4',
    '-10^4 <= xi, yi <= 10^4',
  ],
  functionSignature: `function kClosest(points, k) {\n  \n}`,
  testCases: [
    {
      input: [[[1, 3], [-2, 2]], 1],
      expected: [[-2, 2]],
      label: 'k=1 picks closer point',
    },
    {
      input: [[[3, 3], [5, -1], [-2, 4]], 2],
      expected: [[3, 3], [-2, 4]],
      label: 'k=2 from three points',
    },
    {
      input: [[[0, 1], [1, 0]], 2],
      expected: [[0, 1], [1, 0]],
      label: 'both equidistant, return all',
    },
    {
      input: [[[1, 0], [0, 1], [1, 1], [0, 0]], 2],
      expected: [[1, 0], [0, 1]],
      label: 'includes origin, k=2',
    },
  ],
};

export const kthLargestElementInArray: Problem = {
  id: 'kth-largest-element-in-an-array',
  neetcodeId: 67,
  title: 'Kth Largest Element in an Array',
  category: 'Heap / Priority Queue',
  difficulty: 'Medium',
  description: `Given an integer array nums and an integer k, return the k-th largest element in the array.

Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

Can you solve it without sorting?`,
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
    },
  ],
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  functionSignature: `function findKthLargest(nums, k) {\n  \n}`,
  testCases: [
    {
      input: [[3, 2, 1, 5, 6, 4], 2],
      expected: 5,
      label: '2nd largest',
    },
    {
      input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4],
      expected: 4,
      label: '4th largest with duplicates',
    },
    {
      input: [[1], 1],
      expected: 1,
      label: 'single element',
    },
    {
      input: [[7, 6, 5, 4, 3, 2, 1], 5],
      expected: 3,
      label: '5th largest descending input',
    },
  ],
};

export const taskScheduler: Problem = {
  id: 'task-scheduler',
  neetcodeId: 68,
  title: 'Task Scheduler',
  category: 'Heap / Priority Queue',
  difficulty: 'Medium',
  description: `You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.`,
  examples: [
    {
      input: 'tasks = ["A","A","A","B","B","B"], n = 2',
      output: '8',
      explanation:
        'A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B. With a cooling interval of n=2, we need 8 intervals.',
    },
    {
      input: 'tasks = ["A","C","A","B","D","B"], n = 1',
      output: '6',
      explanation: 'A possible sequence is: A -> B -> C -> D -> A -> B.',
    },
    {
      input: 'tasks = ["A","A","A","B","B","B"], n = 3',
      output: '10',
      explanation: 'A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.',
    },
  ],
  constraints: [
    '1 <= tasks.length <= 10^4',
    'tasks[i] is an uppercase English letter',
    '0 <= n <= 100',
  ],
  functionSignature: `function leastInterval(tasks, n) {\n  \n}`,
  testCases: [
    {
      input: [['A', 'A', 'A', 'B', 'B', 'B'], 2],
      expected: 8,
      label: 'classic cooling example',
    },
    {
      input: [['A', 'C', 'A', 'B', 'D', 'B'], 1],
      expected: 6,
      label: 'no idle needed with n=1',
    },
    {
      input: [['A', 'A', 'A', 'B', 'B', 'B'], 3],
      expected: 10,
      label: 'two idle slots per cycle',
    },
    {
      input: [['A', 'A', 'A'], 0],
      expected: 3,
      label: 'no cooling required',
    },
  ],
};

export const designTwitter: Problem = {
  id: 'design-twitter',
  neetcodeId: 69,
  title: 'Design Twitter',
  category: 'Heap / Priority Queue',
  difficulty: 'Medium',
  description: `Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:
- Twitter() — Initializes your twitter object.
- void postTweet(int userId, int tweetId) — Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
- List<Integer> getNewsFeed(int userId) — Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themselves. Tweets must be ordered from most recent to least recent.
- void follow(int followerId, int followeeId) — The user with ID followerId starts following the user with ID followeeId.
- void unfollow(int followerId, int followeeId) — The user with ID followerId starts unfollowing the user with ID followeeId.`,
  examples: [
    {
      input:
        'Twitter twitter = new Twitter();\ntwitter.postTweet(1, 5);\ntwitter.getNewsFeed(1);\ntwitter.follow(1, 2);\ntwitter.postTweet(2, 6);\ntwitter.getNewsFeed(1);\ntwitter.unfollow(1, 2);\ntwitter.getNewsFeed(1);',
      output: '[null, null, [5], null, null, [6, 5], null, [5]]',
    },
  ],
  constraints: [
    '1 <= userId, followerId, followeeId <= 500',
    '0 <= tweetId <= 10^4',
    'All the tweets have unique IDs.',
    'At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, and unfollow.',
  ],
  functionSignature: `class Twitter {
  constructor() {
    
  }

  postTweet(userId, tweetId) {
    
  }

  getNewsFeed(userId) {
    
  }

  follow(followerId, followeeId) {
    
  }

  unfollow(followerId, followeeId) {
    
  }
}`,
  testCases: [
    {
      input: [
        [
          ['postTweet', 1, 5],
          ['getNewsFeed', 1],
        ],
      ],
      expected: [null, [5]],
      label: 'post and retrieve own tweet',
    },
    {
      input: [
        [
          ['postTweet', 1, 5],
          ['follow', 1, 2],
          ['postTweet', 2, 6],
          ['getNewsFeed', 1],
        ],
      ],
      expected: [null, null, null, [6, 5]],
      label: 'news feed includes followed user tweets',
    },
    {
      input: [
        [
          ['postTweet', 1, 5],
          ['follow', 1, 2],
          ['postTweet', 2, 6],
          ['unfollow', 1, 2],
          ['getNewsFeed', 1],
        ],
      ],
      expected: [null, null, null, null, [5]],
      label: 'unfollow removes tweets from feed',
    },
    {
      input: [
        [
          ['postTweet', 1, 1],
          ['postTweet', 1, 2],
          ['postTweet', 1, 3],
          ['postTweet', 1, 4],
          ['postTweet', 1, 5],
          ['postTweet', 1, 6],
          ['postTweet', 1, 7],
          ['postTweet', 1, 8],
          ['postTweet', 1, 9],
          ['postTweet', 1, 10],
          ['postTweet', 1, 11],
          ['getNewsFeed', 1],
        ],
      ],
      expected: [null, null, null, null, null, null, null, null, null, null, null, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]],
      label: 'feed capped at 10 most recent',
    },
  ],
};

export const findMedianFromDataStream: Problem = {
  id: 'find-median-from-data-stream',
  neetcodeId: 70,
  title: 'Find Median from Data Stream',
  category: 'Heap / Priority Queue',
  difficulty: 'Hard',
  description: `The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, for arr = [2,3,4], the median is 3.
- For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

Implement the MedianFinder class:
- MedianFinder() — Initializes the MedianFinder object.
- void addNum(int num) — Adds the integer num from the data stream to the data structure.
- double findMedian() — Returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.`,
  examples: [
    {
      input:
        'MedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);\nmedianFinder.addNum(2);\nmedianFinder.findMedian();\nmedianFinder.addNum(3);\nmedianFinder.findMedian();',
      output: '[null, null, null, 1.5, null, 2.0]',
      explanation:
        'After adding 1 and 2 the median is (1+2)/2 = 1.5. After adding 3 the median is 2.',
    },
  ],
  constraints: [
    '-10^5 <= num <= 10^5',
    'There will be at least one element in the data structure before calling findMedian.',
    'At most 5 * 10^4 calls will be made to addNum and findMedian.',
  ],
  functionSignature: `class MedianFinder {
  constructor() {
    
  }

  addNum(num) {
    
  }

  findMedian() {
    
  }
}`,
  testCases: [
    {
      input: [
        [
          ['addNum', 1],
          ['addNum', 2],
          ['findMedian'],
          ['addNum', 3],
          ['findMedian'],
        ],
      ],
      expected: [null, null, 1.5, null, 2.0],
      label: 'basic even then odd stream',
    },
    {
      input: [
        [
          ['addNum', 6],
          ['findMedian'],
          ['addNum', 10],
          ['findMedian'],
          ['addNum', 2],
          ['findMedian'],
          ['addNum', 6],
          ['findMedian'],
        ],
      ],
      expected: [null, 6.0, null, 8.0, null, 6.0, null, 6.0],
      label: 'four numbers with repeated median',
    },
    {
      input: [
        [
          ['addNum', -1],
          ['findMedian'],
          ['addNum', -2],
          ['findMedian'],
          ['addNum', -3],
          ['findMedian'],
        ],
      ],
      expected: [null, -1.0, null, -1.5, null, -2.0],
      label: 'negative numbers',
    },
    {
      input: [
        [
          ['addNum', 5],
          ['addNum', 3],
          ['addNum', 8],
          ['addNum', 4],
          ['findMedian'],
          ['addNum', 7],
          ['findMedian'],
        ],
      ],
      expected: [null, null, null, null, 4.5, null, 5.0],
      label: 'unsorted insertions',
    },
  ],
};

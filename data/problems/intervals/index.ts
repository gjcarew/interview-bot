import { Problem } from '../../../src/types';

export const insertInterval: Problem = {
  id: 'insert-interval',
  neetcodeId: 130,
  title: 'Insert Interval',
  category: 'Intervals',
  difficulty: 'Medium',
  description: `You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.`,
  examples: [
    {
      input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
      output: '[[1,5],[6,9]]',
    },
    {
      input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]',
      output: '[[1,2],[3,10],[12,16]]',
      explanation: 'Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].',
    },
  ],
  constraints: [
    '0 <= intervals.length <= 10^4',
    'intervals[i].length == 2',
    '0 <= starti <= endi <= 10^5',
    'intervals is sorted by starti in ascending order.',
    'intervals does not contain any overlapping intervals.',
    'newInterval.length == 2',
    '0 <= start <= end <= 10^5',
  ],
  functionSignature: `function insert(intervals, newInterval) {\n  \n}`,
  testCases: [
    { input: [[[1,3],[6,9]], [2,5]], expected: [[1,5],[6,9]] },
    { input: [[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]], expected: [[1,2],[3,10],[12,16]] },
    { input: [[], [5,7]], expected: [[5,7]] },
    { input: [[[1,5]], [2,3]], expected: [[1,5]], label: 'New interval fully inside existing' },
    { input: [[[1,5]], [6,8]], expected: [[1,5],[6,8]], label: 'No overlap, append' },
  ],
};

export const mergeIntervals: Problem = {
  id: 'merge-intervals',
  neetcodeId: 131,
  title: 'Merge Intervals',
  category: 'Intervals',
  difficulty: 'Medium',
  description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
  examples: [
    {
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].',
    },
    {
      input: 'intervals = [[1,4],[4,5]]',
      output: '[[1,5]]',
      explanation: 'Intervals [1,4] and [4,5] are considered overlapping.',
    },
  ],
  constraints: [
    '1 <= intervals.length <= 10^4',
    'intervals[i].length == 2',
    '0 <= starti <= endi <= 10^4',
  ],
  functionSignature: `function merge(intervals) {\n  \n}`,
  testCases: [
    { input: [[[1,3],[2,6],[8,10],[15,18]]], expected: [[1,6],[8,10],[15,18]] },
    { input: [[[1,4],[4,5]]], expected: [[1,5]] },
    { input: [[[1,4],[0,4]]], expected: [[0,4]] },
    { input: [[[1,4],[2,3]]], expected: [[1,4]], label: 'One interval fully inside another' },
    { input: [[[1,2],[3,4],[5,6]]], expected: [[1,2],[3,4],[5,6]], label: 'No overlaps' },
  ],
};

export const nonOverlappingIntervals: Problem = {
  id: 'non-overlapping-intervals',
  neetcodeId: 132,
  title: 'Non-Overlapping Intervals',
  category: 'Intervals',
  difficulty: 'Medium',
  description: `Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.`,
  examples: [
    {
      input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
      output: '1',
      explanation: '[1,3] can be removed and the rest of the intervals are non-overlapping.',
    },
    {
      input: 'intervals = [[1,2],[1,2],[1,2]]',
      output: '2',
      explanation: 'You need to remove two [1,2] to make the rest of the intervals non-overlapping.',
    },
    {
      input: 'intervals = [[1,2],[2,3]]',
      output: '0',
      explanation: 'You don\'t need to remove any of the intervals since they\'re already non-overlapping.',
    },
  ],
  constraints: [
    '1 <= intervals.length <= 10^5',
    'intervals[i].length == 2',
    '-5 * 10^4 <= starti < endi <= 5 * 10^4',
  ],
  functionSignature: `function eraseOverlapIntervals(intervals) {\n  \n}`,
  testCases: [
    { input: [[[1,2],[2,3],[3,4],[1,3]]], expected: 1 },
    { input: [[[1,2],[1,2],[1,2]]], expected: 2 },
    { input: [[[1,2],[2,3]]], expected: 0 },
    { input: [[[1,100],[11,22],[1,11],[2,12]]], expected: 2 },
    { input: [[[0,2],[1,3],[2,4],[3,5],[4,6]]], expected: 2 },
  ],
};

export const meetingRooms: Problem = {
  id: 'meeting-rooms',
  neetcodeId: 133,
  title: 'Meeting Rooms',
  category: 'Intervals',
  difficulty: 'Easy',
  description: `Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.`,
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: 'false',
    },
    {
      input: 'intervals = [[7,10],[2,4]]',
      output: 'true',
    },
  ],
  constraints: [
    '0 <= intervals.length <= 10^4',
    'intervals[i].length == 2',
    '0 <= starti < endi <= 10^6',
  ],
  functionSignature: `function canAttendMeetings(intervals) {\n  \n}`,
  testCases: [
    { input: [[[0,30],[5,10],[15,20]]], expected: false },
    { input: [[[7,10],[2,4]]], expected: true },
    { input: [[]], expected: true, label: 'Empty intervals' },
    { input: [[[1,5],[5,10]]], expected: true, label: 'Touching but not overlapping' },
    { input: [[[1,10],[2,6],[8,12]]], expected: false },
  ],
};

export const meetingRoomsII: Problem = {
  id: 'meeting-rooms-ii',
  neetcodeId: 134,
  title: 'Meeting Rooms II',
  category: 'Intervals',
  difficulty: 'Medium',
  description: `Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.`,
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: '2',
    },
    {
      input: 'intervals = [[7,10],[2,4]]',
      output: '1',
    },
  ],
  constraints: [
    '1 <= intervals.length <= 10^4',
    '0 <= starti < endi <= 10^6',
  ],
  functionSignature: `function minMeetingRooms(intervals) {\n  \n}`,
  testCases: [
    { input: [[[0,30],[5,10],[15,20]]], expected: 2 },
    { input: [[[7,10],[2,4]]], expected: 1 },
    { input: [[[1,5],[2,6],[3,7]]], expected: 3, label: 'All three overlap' },
    { input: [[[1,4],[2,5],[7,10]]], expected: 2 },
    { input: [[[1,10],[2,3],[3,5],[7,9]]], expected: 2 },
  ],
};

export const minimumIntervalToIncludeEachQuery: Problem = {
  id: 'minimum-interval-to-include-each-query',
  neetcodeId: 135,
  title: 'Minimum Interval to Include Each Query',
  category: 'Intervals',
  difficulty: 'Hard',
  description: `You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.

You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.

Return an array containing the answers to the queries.`,
  examples: [
    {
      input: 'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]',
      output: '[3,3,1,4]',
      explanation: 'The queries are processed as follows:\n- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.\n- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.\n- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.\n- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.',
    },
    {
      input: 'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]',
      output: '[2,-1,4,6]',
    },
  ],
  constraints: [
    '1 <= intervals.length <= 10^5',
    '1 <= queries.length <= 10^5',
    'intervals[i].length == 2',
    '1 <= lefti <= righti <= 10^7',
    '1 <= queries[j] <= 10^7',
  ],
  functionSignature: `function minInterval(intervals, queries) {\n  \n}`,
  testCases: [
    { input: [[[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]], expected: [3,3,1,4] },
    { input: [[[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]], expected: [2,-1,4,6] },
    { input: [[[1,3]], [1,2,3,4]], expected: [3,3,3,-1], label: 'Single interval, one query outside' },
    { input: [[[1,10],[2,3],[4,6]], [5,3,1]], expected: [7,2,10] },
  ],
};

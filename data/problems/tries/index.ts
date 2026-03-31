import { Problem } from '../../../src/types';

export const implementTrie: Problem = {
  id: 'implement-trie',
  neetcodeId: 61,
  title: 'Implement Trie (Prefix Tree)',
  category: 'Tries',
  difficulty: 'Medium',
  description: `A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
- \`Trie()\` Initializes the trie object.
- \`void insert(String word)\` Inserts the string word into the trie.
- \`boolean search(String word)\` Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- \`boolean startsWith(String prefix)\` Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.`,
  examples: [
    {
      input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]',
      output: '[null,null,true,false,true,null,true]',
      explanation:
        'After inserting "apple": search("apple") → true, search("app") → false (not inserted), startsWith("app") → true. After inserting "app": search("app") → true.',
    },
  ],
  constraints: [
    '1 <= word.length, prefix.length <= 2000',
    'word and prefix consist only of lowercase English letters',
    'At most 3 * 10^4 calls in total will be made to insert, search, and startsWith',
  ],
  functionSignature: `class Trie {
  constructor() {
    
  }

  /** @param {string} word @return {void} */
  insert(word) {
    
  }

  /** @param {string} word @return {boolean} */
  search(word) {
    
  }

  /** @param {string} prefix @return {boolean} */
  startsWith(prefix) {
    
  }
}`,
  testCases: [
    {
      input: [
        ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'],
        [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
      ],
      expected: [null, null, true, false, true, null, true],
      label: 'basic insert, search, startsWith',
    },
    {
      input: [
        ['Trie', 'insert', 'search', 'startsWith', 'search'],
        [[], ['hello'], ['hello'], ['hel'], ['helo']],
      ],
      expected: [null, null, true, true, false],
      label: 'prefix exists but full word does not',
    },
    {
      input: [
        ['Trie', 'insert', 'insert', 'search', 'search', 'startsWith', 'startsWith'],
        [[], ['a'], ['ab'], ['a'], ['ab'], ['a'], ['b']],
      ],
      expected: [null, null, null, true, true, true, false],
      label: 'single character words and prefix checks',
    },
    {
      input: [
        ['Trie', 'insert', 'search', 'startsWith'],
        [[], ['word'], ['wor'], ['wor']],
      ],
      expected: [null, null, false, true],
      label: 'search fails for prefix-only match',
    },
  ],
};

export const addAndSearchWords: Problem = {
  id: 'design-add-and-search-words-data-structure',
  neetcodeId: 62,
  title: 'Design Add and Search Words Data Structure',
  category: 'Tries',
  difficulty: 'Medium',
  description: `Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:
- \`WordDictionary()\` Initializes the object.
- \`void addWord(word)\` Adds word to the data structure, it can be matched later.
- \`bool search(word)\` Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots \`'.'\` where dots can be matched with any letter.`,
  examples: [
    {
      input: '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
      output: '[null,null,null,null,false,true,true,true]',
      explanation:
        'search("pad") → false (not added). search("bad") → true. search(".ad") → true (matches "bad", "dad", or "mad"). search("b..") → true (matches "bad").',
    },
  ],
  constraints: [
    '1 <= word.length <= 25',
    'word in addWord consists of lowercase English letters',
    'word in search consists of \'.\' or lowercase English letters',
    'There will be at most 2 dots in word for search queries',
    'At most 10^4 calls will be made to addWord and search',
  ],
  functionSignature: `class WordDictionary {
  constructor() {
    
  }

  /** @param {string} word @return {void} */
  addWord(word) {
    
  }

  /** @param {string} word @return {boolean} */
  search(word) {
    
  }
}`,
  testCases: [
    {
      input: [
        ['WordDictionary', 'addWord', 'addWord', 'addWord', 'search', 'search', 'search', 'search'],
        [[], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..']],
      ],
      expected: [null, null, null, null, false, true, true, true],
      label: 'basic addWord and wildcard search',
    },
    {
      input: [
        ['WordDictionary', 'addWord', 'search', 'search', 'search'],
        [[], ['a'], ['a'], ['.'], ['aa']],
      ],
      expected: [null, null, true, true, false],
      label: 'single character word with dot wildcard',
    },
    {
      input: [
        ['WordDictionary', 'addWord', 'addWord', 'search', 'search', 'search'],
        [[], ['at'], ['and'], ['a.'], ['...'], ['an']],
      ],
      expected: [null, null, null, true, true, false],
      label: 'wildcard matches partial and full words',
    },
    {
      input: [
        ['WordDictionary', 'addWord', 'search', 'search', 'search'],
        [[], ['abc'], ['abc'], ['a.c'], ['ab.']],
      ],
      expected: [null, null, true, true, true],
      label: 'dot in various positions',
    },
  ],
};

export const wordSearchII: Problem = {
  id: 'word-search-ii',
  neetcodeId: 63,
  title: 'Word Search II',
  category: 'Tries',
  difficulty: 'Hard',
  description: `Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.`,
  examples: [
    {
      input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
      output: '["eat","oath"]',
    },
    {
      input: 'board = [["a","b"],["c","d"]], words = ["abcb"]',
      output: '[]',
      explanation: '"abcb" cannot be formed because cell "b" at [0][1] would need to be reused.',
    },
  ],
  constraints: [
    'm == board.length',
    'n == board[i].length',
    '1 <= m, n <= 12',
    'board[i][j] is a lowercase English letter',
    '1 <= words.length <= 3 * 10^4',
    '1 <= words[i].length <= 10',
    'words[i] consists of lowercase English letters',
    'All the strings in words are unique',
  ],
  functionSignature: `/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  
}`,
  testCases: [
    {
      input: [
        [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']],
        ['oath','pea','eat','rain'],
      ],
      expected: ['eat', 'oath'],
      label: 'standard board with multiple found words',
    },
    {
      input: [
        [['a','b'],['c','d']],
        ['abcb'],
      ],
      expected: [],
      label: 'word requires reusing a cell',
    },
    {
      input: [
        [['a']],
        ['a'],
      ],
      expected: ['a'],
      label: 'single cell board matching single letter word',
    },
    {
      input: [
        [['o','a','b','n'],['o','t','a','e'],['a','h','k','r'],['a','f','l','v']],
        ['oa','oaa'],
      ],
      expected: ['oa', 'oaa'],
      label: 'words sharing a common prefix on the board',
    },
  ],
};

/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

/**
 * Generate an 8x8 chessboard with two queens placed on it.
 *
 * @param {number[]} queen1 - The position of the first queen in the format [row, column].
 * @param {number[]} queen2 - The position of the second queen in the format [row, column].
 * @returns {number[][]} An 8x8 chessboard where queens are represented by 1.
 */
const generateBoard = (queen1, queen2) => { // Feedback: export both functions at the end with module.exports = { generateBoard, queenThreat }.
  const board = [];
  for (let i = 0; i < 8; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  board[queen1[0]][queen1[1]] = 1;
  board[queen2[0]][queen2[1]] = 1;

  return board;
};

/**
 * Check whether two queens can attack each other.
 *
 * @param {number[][]} board - An 8x8 chessboard where queens are represented by 1.
 * @returns {boolean} True if the queens are on the same row, column, or diagonal.
 */
const queenThreat = (board) => {
  /**
   * Detect queens positions on the board.
   *
   * @param {number[][]} board - An 8x8 chessboard where queens are represented by 1.
   * @returns {number[][]} An array of queen positions in the format [row, column].
   */
  const detectQueen = (board) => {
    let indexQueens = [];

    board.forEach((row, index) => {
      if (row.includes(1)) {
        indexQueens.push([index, row.indexOf(1)]);
      }
    });

    return indexQueens;
  };

  /**
   * Check whether two queens can attack each other horizontally or vertically.
   *
   * @param {number[][]} queensIndex - Queen positions in the format [row, column].
   * @returns {boolean} True if the queens are on the same row or column.
   */
  const searchOrthogonal = (queensIndex) =>
    queensIndex[0][0] === queensIndex[1][0] || queensIndex[0][1] === queensIndex[1][1];

  /**
   * Check whether two queens can attack each other diagonally.
   *
   * @param {number[][]} queensIndex - Queen positions in the format [row, column].
   * @returns {boolean} True if the queens are on the same diagonal.
   */
  const searchDiagonal = (
    queensIndex, // [0,5]-[1,4][2,3]->true [0,5]-[3,2]->false
  ) =>
    queensIndex[0][0] + queensIndex[0][1] === queensIndex[1][0] + queensIndex[1][1] ||
    queensIndex[0][0] - queensIndex[0][1] === queensIndex[1][0] - queensIndex[1][1];

  const queensIndex = detectQueen(board);

  return searchOrthogonal(queensIndex) || searchDiagonal(queensIndex);
};

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

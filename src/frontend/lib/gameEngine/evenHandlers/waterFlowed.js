/* eslint-disable no-use-before-define */
import deepCopy from "@/lib/deepCopy";
import { tileTypes } from "../tile";
import statuses from "../statuses";

export default (gameEngine) => {
  const state = gameEngine.getState();
  const [startX, startY] = findStart(state.board);
  const { board, status } = flowWater(startX, startY, "N", state.board);

  if (status === statuses.won) gameEngine.dispatch("GAME_WON");
  if (status === statuses.failed) gameEngine.dispatch("GAME_FAILED");

  state.board = board;

  return state;
};

const flowWater = (x, y, from, currentBoard) => {
  const board = deepCopy(currentBoard);

  if (outOfBoard(x, y, board) || notConnected(x, y, from, board)) return { board, status: statuses.failed };

  if (board[y][x].filledFrom[from]) {
    const direction = board[y][x].flowOutputFor[from];
    if (direction === "N") return flowWater(x, y - 1, "S", board);
    if (direction === "E") return flowWater(x + 1, y, "W", board);
    if (direction === "S") return flowWater(x, y + 1, "N", board);
    if (direction === "W") return flowWater(x - 1, y, "E", board);
  } else {
    board[y][x].filledFrom[from] = true;
  }

  if (reachedFinish(x, y, board)) return { board, status: statuses.won };

  return { board, status: statuses.running };
};

// utils

const findStart = (board) => {
  for (let y = 0; y < board.length; y += 1) {
    for (let x = 0; x < board[y].length; x += 1) {
      if (board[y][x].type === tileTypes.start) return [x, y];
    }
  }
  return { x: undefined, y: undefined };
};

const outOfBoard = (x, y, board) => !board?.[y]?.[x];
const notConnected = (x, y, from, board) => !board[y][x].flowOutputFor[from];
const reachedFinish = (x, y, board) => board[y][x].type === tileTypes.finish;

import tileDefinitions from "../tileDefinitions";

export default (gameEngine, { x, y }) => {
  const state = gameEngine.getState();
  if (!state.running) return state;

  const { nextPipes, board } = state;
  const nextPipe = nextPipes[0];
  const tile = board[y][x];

  if (tile === tileDefinitions.noPipe) {
    board[y][x] = nextPipe;
  }

  return state;
};

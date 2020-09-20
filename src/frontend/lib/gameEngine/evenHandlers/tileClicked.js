import { tileTypes, createTile } from "../tile";
import statuses from "../statuses";

export default (gameEngine, { x, y }) => {
  const state = gameEngine.getState();
  if (state.status !== statuses.building) return state;

  const { nextPipes, board } = state;
  const nextPipe = nextPipes[0];
  const tile = board[y][x];

  if (tile.type === tileTypes.noPipe) {
    board[y][x] = createTile(nextPipe);
    gameEngine.dispatch("PIPE_USED");
  }

  return state;
};

import statuses from "../statuses";

export default (gameEngine) => ({
  ...gameEngine.getState(),
  status: statuses.won,
});

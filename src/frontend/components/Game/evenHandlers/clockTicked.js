import statuses from "../statuses";

export default (gameEngine) => {
  const state = gameEngine.getState();

  if (state.status === statuses.building) state.timer -= 1;
  if (state.status === statuses.building && state.timer === 0) state.status = statuses.running;
  if (state.status === statuses.running) gameEngine.dispatch("WATER_FLOWED");

  return state;
};

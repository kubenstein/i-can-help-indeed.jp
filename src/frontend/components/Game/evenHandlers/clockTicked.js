export default (gameEngine) => {
  const state = gameEngine.getState();
  state.timer -= 1;

  return state;
};

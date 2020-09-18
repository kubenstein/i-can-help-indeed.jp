export default (gameEngine) => ({
  ...gameEngine.getState(),
  running: true,
});

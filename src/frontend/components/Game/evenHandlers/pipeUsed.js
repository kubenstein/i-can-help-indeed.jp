import { pipes as availablePipes } from "../tileDefinitions";

const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

export default (gameEngine) => {
  const state = gameEngine.getState();
  const pipes = state.nextPipes;

  const randomPipe = availablePipes[randomElement(Object.keys(availablePipes))];

  pipes.shift();
  pipes.push(randomPipe);

  return state;
};

import { pipeTypes } from "../tile";

const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

export default (gameEngine) => {
  const state = gameEngine.getState();
  const pipes = state.nextPipes;

  const randomPipe = pipeTypes[randomElement(Object.keys(pipeTypes))];

  pipes.shift();
  pipes.push(randomPipe);

  return state;
};

export const pipeTypes = {
  pipeES: "pipeES",
  pipeEW: "pipeEW",
  pipeNS: "pipeNS",
  pipeNW: "pipeNW",
  pipeSE: "pipeSE",
  pipeSW: "pipeSW",
};

export const tileTypes = {
  ...pipeTypes,
  noPipe: "noPipe",
  start: "start",
  finish: "finish",
};

export const createTile = (type) => ({
  type,
});

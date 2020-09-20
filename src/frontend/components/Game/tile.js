const pipes = {
  pipeES: {
    type: "pipeES",
    flowOutputFor: {
      E: "S",
      S: "E",
    },
  },
  pipeEW: {
    type: "pipeEW",
    flowOutputFor: {
      E: "W",
      W: "E",
    },
  },
  pipeNS: {
    type: "pipeNS",
    flowOutputFor: {
      N: "S",
      S: "N",
    },
  },
  pipeNW: {
    type: "pipeNW",
    flowOutputFor: {
      N: "W",
      W: "N",
    },
  },
  pipeNE: {
    type: "pipeNE",
    flowOutputFor: {
      N: "E",
      E: "N",
    },
  },
  pipeSW: {
    type: "pipeSW",
    flowOutputFor: {
      S: "W",
      W: "S",
    },
  },
};

const tiles = {
  ...pipes,
  noPipe: {
    type: "noPipe",
    flowOutputFor: {},
  },
  start: {
    type: "start",
    flowOutputFor: {
      N: "W",
      E: "W",
      S: "W",
      W: "W",
    },
  },
  finish: {
    type: "finish",
    flowOutputFor: {
      N: "N",
    },
  },
};

export const pipeTypes = Object.keys(pipes).reduce((o, k) => ({ ...o, [k]: tiles[k].type }), {});

export const tileTypes = Object.keys(tiles).reduce((o, k) => ({ ...o, [k]: tiles[k].type }), {});

export const createTile = (type) => ({
  type,
  filledFrom: { N: false, E: false, S: false, W: false },
  flowOutputFor: tiles[type].flowOutputFor,
});

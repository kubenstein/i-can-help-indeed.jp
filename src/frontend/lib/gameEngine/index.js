import deepCopy from "@/lib/deepCopy";
import eventHandlers from "./evenHandlers";
import { tileTypes, createTile } from "./tile";
import statuses from "./statuses";

export default class GameEngine {
  state = this.initialState();

  clock = null;

  updateListener = () => {};

  initialState() {
    const { noPipe, pipeNS, pipeEW, start, finish } = tileTypes;
    const t = createTile;
    return deepCopy({
      status: statuses.idle,
      timer: 60,
      points: 0,
      nextPipes: [pipeNS, pipeEW, pipeNS],
      board: [
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(start), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(finish), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
        [t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe), t(noPipe)],
      ],
    });
  }

  getState() {
    return deepCopy(this.state);
  }

  start() {
    this.state = this.initialState();
    clearInterval(this.clock);
    this.clock = setInterval(() => this.dispatch("CLOCK_TICKED"), 1000);
    this.dispatch("GAME_STARTED");
  }

  stop() {
    clearInterval(this.clock);
  }

  clickTile(x, y) {
    this.dispatch("TILE_CLICKED", { x, y });
  }

  onUpdate(updateListener) {
    this.updateListener = updateListener;
  }

  stopListening() {
    this.updateListener = () => {};
  }

  // private

  dispatch(eventName, payload) {
    setTimeout(() => {
      const eventHandler = eventHandlers[eventName];
      if (eventHandler) {
        this.state = eventHandlers[eventName](this, payload);
        this.updateListener(this.getState());
      }
    }, 0);
  }
}

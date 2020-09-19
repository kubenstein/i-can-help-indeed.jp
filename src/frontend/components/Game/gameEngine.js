import eventHandlers from "./evenHandlers";
import { tiles } from "./tileDefinitions";
import statuses from "./statuses";

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export default class GameEngine {
  state = this.initialState();

  clock = null;

  updateListener = () => {};

  initialState() {
    const { noPipe, pipeNS, pipeEW, start, finish } = tiles;
    return deepCopy({
      status: statuses.idle,
      timer: 60,
      nextPipes: [pipeNS, pipeEW, pipeNS],
      board: [
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, start, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, finish, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
        [noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe, noPipe],
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

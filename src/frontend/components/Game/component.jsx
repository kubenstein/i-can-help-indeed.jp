/* eslint-disable global-require, react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button";
import VisualNovel from "@/components/VisualNovel";
import HiddenImagePreloader from "@/components/HiddenImagePreloader";
import statuses from "@/lib/gameEngine/statuses";
import screenInfos from "./screenInfos";

import "./styles.scss";

const imageUrlsToPreload = [
  require("@/assets/images/game/start.png").default,
  require("@/assets/images/game/startFill.png").default,
  require("@/assets/images/game/finish.png").default,
  require("@/assets/images/game/finishFill.png").default,
  require("@/assets/images/game/pipeES.png").default,
  require("@/assets/images/game/pipeESFill.png").default,
  require("@/assets/images/game/pipeEW.png").default,
  require("@/assets/images/game/pipeEWFill.png").default,
  require("@/assets/images/game/pipeNS.png").default,
  require("@/assets/images/game/pipeNSFill.png").default,
  require("@/assets/images/game/pipeNW.png").default,
  require("@/assets/images/game/pipeNWFill.png").default,
  require("@/assets/images/game/pipeNE.png").default,
  require("@/assets/images/game/pipeNEFill.png").default,
  require("@/assets/images/game/pipeSW.png").default,
  require("@/assets/images/game/pipeSWFill.png").default,
  require("@/assets/images/game/pipeNESW.png").default,
  require("@/assets/images/game/pipeNESWFill.png").default,
  require("@/assets/images/game/pipeNESWFillEW.png").default,
  require("@/assets/images/game/pipeNESWFillNS.png").default,
];

const GameUI = ({ startGame, status, timer, points, board, onTileClick, nextPipes }) => {
  const onDialogExit = (message) => {
    if (message === statuses.building) startGame();
  };

  return (
    <div styleName="canvas">
      <HiddenImagePreloader imageUrls={imageUrlsToPreload} />
      {[statuses.idle, statuses.won, statuses.failed].includes(status) && (
        <VisualNovel screenInfos={screenInfos} initialScreen={status} styleName="dialog" onExit={onDialogExit} />
      )}

      <div styleName="board">
        {board.map((row, y) => (
          <div key={y} styleName="row">
            {row.map((tile, x) => (
              <Button key={`${y}${x}`} onClick={() => onTileClick(x, y)} styleName="tileWrapper">
                <div
                  styleName={[
                    "tile",
                    tile.type,
                    tile.filledFrom.N ? "fillN" : "",
                    tile.filledFrom.E ? "fillE" : "",
                    tile.filledFrom.S ? "fillS" : "",
                    tile.filledFrom.W ? "fillW" : "",
                  ].join(" ")}
                />
              </Button>
            ))}
          </div>
        ))}
      </div>

      <div styleName="side">
        {[statuses.building, statuses.idle].includes(status) ? (
          <div styleName="numbers timer">
            <span styleName="label">Time:</span>
            {`${timer}s`}
          </div>
        ) : (
          <div styleName="numbers points">
            <span styleName="label">Points:</span>
            {points}
          </div>
        )}
        <div styleName="nextPipe">
          <span styleName="label">Next Pipe:</span>
          <div styleName="imgWrapper">
            <div styleName={`pipe ${nextPipes[0]}`} />
          </div>
        </div>
        <div styleName="imgWrapper">
          <div styleName={`pipe ${nextPipes[1]}`} />
        </div>
        <div styleName="imgWrapper">
          <div styleName={`pipe ${nextPipes[2]}`} />
        </div>
      </div>
    </div>
  );
};

GameUI.propTypes = {
  startGame: PropTypes.func,
  timer: PropTypes.number,
  points: PropTypes.number,
  status: PropTypes.string,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape)),
  onTileClick: PropTypes.func,
  nextPipes: PropTypes.arrayOf(PropTypes.string),
};

GameUI.defaultProps = {
  startGame: () => {},
  timer: 60,
  points: 0,
  status: "idle",
  board: [[]],
  onTileClick: () => {},
  nextPipes: [],
};

export default GameUI;

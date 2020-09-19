/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button";
import AppearingText from "@/components/AppearingText";
import screenInfos from "./screenInfos";
import statuses from "./statuses";

import "./styles.scss";

const GameUI = ({ startGame, status, timer, points, board, onTileClick, nextPipes }) => (
  <div styleName="canvas">
    {[statuses.idle, statuses.won, statuses.failed].includes(status) && (
      <>
        <div styleName="rightCharacter" style={{ backgroundImage: `url(${screenInfos[status].rightCharacter})` }} />
        <div styleName="dialog">
          <h3>{screenInfos[status].dialog.name}</h3>
          <p>
            <AppearingText text={screenInfos[status].dialog.text} />
          </p>

          <Button onClick={startGame} styleName="nextBtn">
            {screenInfos[status].dialog.btn}
          </Button>
        </div>
      </>
    )}

    <div styleName="board">
      {board.map((row, y) => (
        <div key={y} styleName="row">
          {row.map((tile, x) => (
            <Button key={`${y}${x}`} onClick={() => onTileClick(x, y)} styleName="tileWrapper">
              <div styleName={`tile ${tile.type}${tile.fill ? "Fill" : ""}`} />
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

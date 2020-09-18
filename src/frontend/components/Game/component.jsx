/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button";
import AppearingText from "@/components/AppearingText";
import screenInfo from "./screenInfo";

import "./styles.scss";

const GameUI = ({ startGame, timer, board, onTileClick, nextPipes }) => {
  const [showIntro, setShowIntro] = useState(true);
  const onIntroDismiss = () => {
    setShowIntro(false);
    startGame();
  };
  return (
    <div styleName="canvas">
      {showIntro && (
        <>
          <div styleName="rightCharacter" style={{ backgroundImage: `url(${screenInfo.rightCharacter})` }} />
          <div styleName="dialog">
            <h3>{screenInfo.dialog.name}</h3>
            <p>
              <AppearingText text={screenInfo.dialog.text} />
            </p>

            <Button onClick={onIntroDismiss} styleName="nextBtn">
              Let&apos;s do this! -&gt;
            </Button>
          </div>
        </>
      )}

      <div styleName="board">
        {board.map((row, y) => (
          <div key={y} styleName="row">
            {row.map((cellType, x) => (
              <Button key={`${y}${x}`} onClick={() => onTileClick(x, y)} styleName="tileWrapper">
                <div styleName={`tile ${cellType}`} />
              </Button>
            ))}
          </div>
        ))}
      </div>

      <div styleName="side">
        <div styleName="timer">{`${timer}s`}</div>
        <div styleName="nextPipe">
          <span>Next Pipe:</span>
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
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  onTileClick: PropTypes.func,
  nextPipes: PropTypes.arrayOf(PropTypes.string),
};

GameUI.defaultProps = {
  startGame: () => {},
  timer: 60,
  board: [[]],
  onTileClick: () => {},
  nextPipes: [],
};

export default GameUI;

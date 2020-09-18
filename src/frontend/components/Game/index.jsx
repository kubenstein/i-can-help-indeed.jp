import React, { useEffect, useState } from "react";
import GameEngine from "./gameEngine";
import GameUI from "./component";

import "./styles.scss";

const GameEngineReactBridge = () => {
  const [gameEngine] = useState(() => new GameEngine());
  const [reactiveGameState, setReactiveGameState] = useState(() => gameEngine.getState());

  const startGame = () => gameEngine.start();
  const onTileClick = (x, y) => gameEngine.clickTile(x, y);

  useEffect(() => {
    gameEngine.onUpdate((gameState) => setReactiveGameState(gameState));
    return () => {
      gameEngine.stopListening();
      gameEngine.stop();
    };
  }, []);

  return (
    <GameUI
      timer={reactiveGameState.timer}
      board={reactiveGameState.board}
      nextPipes={reactiveGameState.nextPipes}
      startGame={startGame}
      onTileClick={onTileClick}
    />
  );
};

export default GameEngineReactBridge;

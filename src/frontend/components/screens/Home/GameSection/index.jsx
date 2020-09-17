import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

import "./styles.scss";

const GameSection = () => (
  <div styleName="gameSection" className="innerSection">
    <h1 styleName="header">
      &quot;I can help&nbsp;
      <b>Indeed!</b>
      &quot;
    </h1>
    <p>additional description</p>

    <div styleName="mainMenu">
      <Button tag={Link} to="/story" styleName="button">
        Story Mode
      </Button>
      <Button tag={Link} to="/game" styleName="button">
        Quick Game
      </Button>
    </div>
  </div>
);

export default GameSection;

import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

import "./styles.scss";

const GameSection = () => (
  <div styleName="gameSection" className="innerSection">
    <h1 className="title" styleName="title">
      &quot;I can help&nbsp;
      <b>Indeed!</b>
      &quot;
    </h1>
    <p className="subtitle" styleName="subtitle">
      <a styleName="link" href="/">
        i-can-help-indeed.jp
      </a>
      &nbsp;is a connect-pipes-puzzle type of game, wrapped in a gentle, Japanese Visual Novel story. It is a story of
      Keziah, Ivan and me...
      <br />
      <br />
      As the UX Frontend position is heavily about localising not only content but whole design, I decided to make
      something targeting a specific region. I live in Japan so I picked this region because it is such a unique
      cultural centre.
      <br />
      <br />
      I came up with an idea of a retro, Visual Novel game so commonly seen in Japan. The game uses green pipes which
      are yet another strong reference to Japanese gaming culture.
      <br />
      <br />
      <br />
      This project is a brief preview of frontend skills, algorithmic thinking, creative energy and pro-active nature I
      am bringing to the Indeed table.
      <br />
    </p>

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

import React from "react";
import Button from "@/components/Button";

import "./styles.scss";

const HomeScreen = () => (
  <div styleName="wrapper">
    <h1 styleName="header">
      &quot;I can help&nbsp;
      <b>Indeed!</b>
      &quot;
    </h1>
    <p>additional description</p>

    <div styleName="mainMenu">
      <Button styleName="button">Story Mode</Button>
      <Button styleName="button">Quick Game</Button>
    </div>
  </div>
);

export default HomeScreen;

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Game from "@/components/Game";
import Footer from "@/components/Footer";

import "./styles.scss";

const GameScreen = () => {
  useEffect(() => {
    window.scroll({
      top: document.getElementById("gameContent").offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div styleName="wrapper">
      <Header />
      <div styleName="content" id="gameContent">
        <div className="innerSection">
          <Game />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameScreen;

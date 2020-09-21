import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "@/components/Header";
import VisualNovel from "@/components/VisualNovel";
import Footer from "@/components/Footer";

import screenInfos from "./screenInfos";

import "./styles.scss";

const StoryScreen = () => {
  const history = useHistory();

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
          <VisualNovel
            screenInfos={screenInfos}
            initialScreen="0"
            onExit={(exitRoute) => history.push({ pathname: exitRoute })}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryScreen;

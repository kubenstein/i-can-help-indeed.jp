import React, { useEffect } from "react";
import Header from "@/components/Header";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

import "./styles.scss";

const StoryScreen = () => {
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
          <Story />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryScreen;

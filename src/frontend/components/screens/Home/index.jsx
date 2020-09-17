import React from "react";
import Header from "@/components/Header";
import GameSection from "./GameSection";

import "./styles.scss";

const HomeScreen = () => (
  <div styleName="wrapper">
    <Header fixed />
    <GameSection />
  </div>
);

export default HomeScreen;

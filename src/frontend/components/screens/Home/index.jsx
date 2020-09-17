import React from "react";
import Header from "@/components/Header";
import GameSection from "./GameSection";
import ReasonsToHire from "./ReasonsToHire";

import "./styles.scss";

const HomeScreen = () => (
  <div styleName="wrapper">
    <Header fixed />
    <GameSection />
    <ReasonsToHire />
  </div>
);

export default HomeScreen;

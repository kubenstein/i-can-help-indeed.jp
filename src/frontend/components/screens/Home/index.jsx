import React from "react";
import Header from "@/components/Header";
import GameSection from "./GameSection";
import ReasonsToHire from "./ReasonsToHire";
import Demo from "./Demo";

import "./styles.scss";

const HomeScreen = () => (
  <div styleName="wrapper">
    <Header fixed />
    <GameSection />
    <ReasonsToHire />
    <Demo />
  </div>
);

export default HomeScreen;

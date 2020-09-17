import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameSection from "./GameSection";
import ReasonsToHire from "./ReasonsToHire";
import Demo from "./Demo";
import Faq from "./Faq";

import "./styles.scss";

const HomeScreen = () => (
  <div styleName="wrapper">
    <Header fixed />
    <GameSection />
    <ReasonsToHire />
    <Demo />
    <Faq />
    <Footer />
  </div>
);

export default HomeScreen;

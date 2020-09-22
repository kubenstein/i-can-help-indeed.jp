import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameSection from "./GameSection";
import ReasonsToHire from "./ReasonsToHire";
import Demo from "./Demo";
import Faq from "./Faq";

import "./styles.scss";

const HomeScreen = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div styleName="wrapper">
      <Header fixed />
      <GameSection />
      <ReasonsToHire />
      <Demo />
      <Faq />
      <Footer styleName="footer" />
    </div>
  );
};

export default HomeScreen;

import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <>
      <Header mixClass="app__wrapper app__header" />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;

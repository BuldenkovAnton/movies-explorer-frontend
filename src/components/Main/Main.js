import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <>
      <Header mixClass="app__wrapper app__header">
        <Navigation>
          <li className="navigation__item navigation__item_page_home">
            <Link to="/signup" className="link navigation__link navigation__link_page_home">
              Регистрация
            </Link>
          </li>
          <li className="navigation__item navigation__item_page_home">
            <Link
              to="/signin"
              className="link navigation__link navigation__link_page_home navigation__link_type_button"
            >
              Войти
            </Link>
          </li>
        </Navigation>
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;

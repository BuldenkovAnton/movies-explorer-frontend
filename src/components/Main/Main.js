import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main(props) {
  return (
    <>
      <Header mixClass="app__header">
        <Menu mixClass="header__menu">
          <MenuItem
            link="/signup"
            linkMixClass="menu__link"
          >
            Регистрация
          </MenuItem>

          <MenuItem
            link="/signin"
            linkMixClass="menu__link menu__link_type_button"
          >
            Войти
          </MenuItem>
        </Menu>
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer/>
    </>
  );
}

export default Main;

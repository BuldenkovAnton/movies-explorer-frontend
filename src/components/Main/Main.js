import React from "react";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import Promo from "../Promo/Promo";

function Main(props) {
  return (
    <>
      <Header>
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
    </>
  );
}

export default Main;

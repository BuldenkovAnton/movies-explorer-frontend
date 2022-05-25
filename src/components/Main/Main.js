import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";

function Main(props) {
  return (
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
  );
}

export default Main;

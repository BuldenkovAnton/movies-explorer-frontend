import React, { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";

import burgerMenuImage from "../../images/burger.svg";
import closeMenuImage from "../../images/menu_close.svg";
import accauntImage from "../../images/account.svg";
import Navigation from "../Navigation/Navigation";

function BurgerMenu({ children }) {
  const isLogged = React.useContext(IsLoggedContext);
  const location = useLocation();

  const [isNavigationShow, setIsNavigationShow] = useState(false);

  const navigationPanelClass = useMemo(() => {
    return `burger-menu__panel ${
      isNavigationShow && "burger-menu__panel_show"
    }`;
  }, [isNavigationShow]);

  const openMenuHandler = useCallback((e) => {
    setIsNavigationShow(true);
  }, []);

  const closewMenuHandler = useCallback((e) => {
    setIsNavigationShow(false);
  }, []);

  const isAuthPage = () => location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>

    {!isLogged && !isAuthPage() && (
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
    )}

    {isLogged && !isAuthPage() && (
      <div className="burger-menu">
        <button className="burger-menu__open" onClick={openMenuHandler}>
          <img
            className="burger-menu__image"
            src={burgerMenuImage}
            alt="Открыть меню"
          />
        </button>

        <div className={navigationPanelClass}>
          <div className="burger-menu__container">
            <button className="burger-menu__close" onClick={closewMenuHandler}>
              <img
                className="burger-menu__image"
                src={closeMenuImage}
                alt="Закрыть меню"
              />
            </button>

              <Navigation mixClass="navigation_burger">
                <li className="navigation__item navigation__item_place_burger  navigation__item_hide_notebook">
                  <Link
                    to="/"
                    className="navigation__link navigation__link_place_burger"
                  >
                    Главная
                  </Link>
                </li>
                <li className="navigation__item navigation__item_place_burger">
                  <Link
                    to="/movies"
                    className="navigation__link navigation__link_place_burger navigation__link_active"
                  >
                    Фильмы
                  </Link>
                </li>
                <li className="navigation__item navigation__item_place_burger">
                  <Link
                    to="/saved-movies"
                    className="navigation__link navigation__link_place_burger"
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </Navigation>

            <Link to="/profile" className="burger-menu__account">
              <img
                className="burger-menu__account-icon"
                src={accauntImage}
                alt="Профиль"
              />
              Аккаунт
            </Link>
          </div>
        </div>
      </div>
       )}
    </>
  );
}

export default BurgerMenu;

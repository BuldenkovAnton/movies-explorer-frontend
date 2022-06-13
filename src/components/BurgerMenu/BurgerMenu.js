import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import burgerMenuImage from "../../images/burger.svg";
import closeMenuImage from "../../images/menu_close.svg";
import accauntImage from "../../images/account.svg";

function BurgerMenu({ children }) {
  const [isNavigationShow, setIsNavigationShow] = useState(false);

  const navigationPanelClass = useMemo(() => {
    return `burger-menu__panel ${
      isNavigationShow && "burger-menu__panel_show"}`
  }, [isNavigationShow]);

  const openMenuHandler = useCallback((e) => {
    setIsNavigationShow(true);
  }, []);

  const closewMenuHandler = useCallback((e) => {
    setIsNavigationShow(false);
  }, []);

  return (
    <>
      {children && (
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
              <button
                className="burger-menu__close"
                onClick={closewMenuHandler}
              >
                <img
                  className="burger-menu__image"
                  src={closeMenuImage}
                  alt="Закрыть меню"
                />
              </button>

              {children}

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

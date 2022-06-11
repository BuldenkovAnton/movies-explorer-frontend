import React from "react";
import Navigation from "../Navigation/Navigation";

function Footer() {
  return (
    <footer className="app__wrapper app__footer footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__date">©2022</p>

      <Navigation navClass="footer__menu" mixClass="footer__menu-list">
          <li className="navigation__item navigation__item_place_footer">
            <a
              className="link navigation__link navigation__link_place_footer"
              target="_blank"
              rel="noreferrer"
              href="https://practicum.yandex.ru"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="navigation__item navigation__item_place_footer">
            <a
              className="link navigation__link navigation__link_place_footer"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/BuldenkovAnton"
            >
              Github
            </a>
          </li>
          <li className="navigation__item navigation__item_place_footer">
            <a
              className="link navigation__link navigation__link_place_footer"
              target="_blank"
              rel="noreferrer"
              href="https://buldenkov.ru"
            >
               Buldenkov.ru
            </a>
          </li>
        </Navigation>
    </footer>
  );
}

export default Footer;

import React from "react";
import portfolioArrow from "../../images/portfolio_arrow.svg";
import Navigation from "../Navigation/Navigation";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>

      <Navigation mixClass="portfolio__list">
        <li className="navigation__item navigation__item_place_portfolio">
          <a
            className="link navigation__link navigation__link_place_portfolio"
            href="https://github.com/BuldenkovAnton/russian-travel"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
            <img
              className="navigation__icon"
              src={portfolioArrow}
              alt="Ссылка: Статичный сайт"
            />
          </a>
        </li>

        <li className="navigation__item navigation__item_place_portfolio">
          <a
            className="link navigation__link navigation__link_place_portfolio"
            href="https://github.com/BuldenkovAnton/mesto"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт
            <img
              className="navigation__icon"
              src={portfolioArrow}
              alt="Ссылка: Адаптивный сайт"
            />
          </a>
        </li>
        <li className="navigation__item navigation__item_place_portfolio">
          <a
            className="link navigation__link navigation__link_place_portfolio"
            href="https://github.com/BuldenkovAnton/react-mesto-api-full"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение
            <img
              className="navigation__icon"
              src={portfolioArrow}
              alt="Ссылка: Одностраничное приложение"
            />
          </a>
        </li>
      </Navigation>
    </div>
  );
}

export default Portfolio;

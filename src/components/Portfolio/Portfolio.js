import React from "react";
import { Link } from "react-router-dom";
import portfolioArrow from '../../images/portfolio_arrow.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>

      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link" to="https://github.com/BuldenkovAnton/russian-travel">
            Статичный сайт
            <img src={portfolioArrow} alt="Ссылка: Статичный сайт" />
          </Link>

        </li>

      </ul>
    </div>
  );
}

export default Portfolio;
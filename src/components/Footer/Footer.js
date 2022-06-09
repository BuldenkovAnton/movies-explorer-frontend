import React from "react";

function Footer() {
  return (
    <footer className="app__footer footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__date">© 2022</p>
      <ul className="footer__menu">
        <li className="footer__menu-item">
          <a
            className="footer__menu-link"
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__menu-item">
          <a
            className="footer__menu-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BuldenkovAnton"
          >
            Githib
          </a>
        </li>
        <li className="footer__menu-item">
          <a
            className="footer__menu-link"
            target="_blank"
            rel="noreferrer"
            href="https://buldenkov.ru"
          >
            Buldenkov.ru
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Image from '../../images/foto.jpg';
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <div className="page__about-me about-me">
      <SectionTitle mixClass="about-me__title">
        Студент
      </SectionTitle>

      <div className="about-me__card">
        <div className="about-me__card-conteiner">

          <div className="about-me__name">Антон</div>
          <div className="about-me__job">Фронтенд-разработчик, 33 года</div>
          <div className="about-me__life">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </div>
        </div>

        <ul className="about-me__links">
            <li className="about-me__link-item">
              <Link className="about-me__link link" to="https://buldenkov.ru" target="_blank">
                buldenkov.ru
              </Link>
            </li>
            <li className="about-me__link-item">
              <Link className="about-me__link link" to="https://github.com/BuldenkovAnton" target="_blank">
                Github
              </Link>
            </li>
          </ul>

        <img className="about-me__foto" src={Image} alt="Антон" />
      </div>
    </div>

  );
}

export default AboutMe;
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/foto.jpg";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <section className="app__wrapper app__about-me about-me" id="about-me">
      <SectionTitle mixClass="about-me__title">Студент</SectionTitle>

      <div className="about-me__card">
        <div className="about-me__card-conteiner">
          <div className="about-me__name">Антон</div>
          <div className="about-me__job">Фронтенд-разработчик, 33 года</div>
          <div className="about-me__life">
            Я из Воскресенска. Закончил физмат с отличием в МГОСГИ г. Коломна. С
            2010 года фрилансер, занимаюсь разработкой сайтов. С 2012 года
            работаю инженер-программистом в муниципалитете, занимаюсь
            разработкой сайтов на 1С-Битрикс. После пройденого курса по
            веб-разработке, поменял свой стек на MERN.
          </div>
        </div>

        <Navigation navClass="about-me__links">
          <li className="navigation__item navigation__item_place_about-me">
            <a
              rel="noreferrer"
              className="link navigation__link navigation__link_place_about-me"
              href="https://buldenkov.ru"
              target="_blank"
            >
              Buldenkov.ru
            </a>
          </li>
          <li className="navigation__item navigation__item_place_about-me">
            <a
              rel="noreferrer"
              className="link navigation__link navigation__link_place_about-me"
              href="https://github.com/BuldenkovAnton"
              target="_blank"
            >
              Github
            </a>
          </li>
        </Navigation>
        <img className="about-me__foto" src={Image} alt="Антон" />
      </div>

      <Portfolio />
    </section>
  );
}

export default AboutMe;

import React from "react";
import { Link } from "react-router-dom";
import Image from '../../images/foto.jpg';
import Portfolio from "../Portfolio/Portfolio";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <section className="app__container about-me">
      <SectionTitle mixClass="about-me__title">
        Студент
      </SectionTitle>

      <div className="about-me__card">
        <div className="about-me__card-conteiner">

          <div className="about-me__name">Антон</div>
          <div className="about-me__job">Фронтенд-разработчик, 33 года</div>
          <div className="about-me__life">
            Я из Воскресенска. Закончил физмат с отличием в МГОСГИ г. Коломна. С 2010 года фрилансер, занимаюсь разработкой сайтов. С 2012 года работаю инженер-программистом в муниципалитете, занимаюсь разработкой сайтов на 1С-Битрикс. После пройденого курса по веб-разработке, поменял свой стек на MERN.
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

      <Portfolio />


    </section>
  );
}

export default AboutMe;
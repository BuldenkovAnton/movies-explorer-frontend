import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
  return (
    <section className="techs">
      <div className="app__container techs__container">
        <SectionTitle mixClass="techs__title">Технологии</SectionTitle>

        <h3 className="techs__tech-count">7 технологий</h3>
        <p className="techs__info">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;

import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import NavTab from "../NavTab/NavTab";
import Tab from "../Tab/Tab";

function Techs() {
  return (
    <section className="techs">
      <div className="app__container techs__container">
        <SectionTitle mixClass="techs__title">Технологии</SectionTitle>

        <h3 className="techs__tech-count">7 технологий</h3>
        <p className="techs__info">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>

        <NavTab modificatorClass="techs__list">
          <Tab modificatorClass="tab_place_techs" title="HTML"/>
          <Tab modificatorClass="tab_place_techs" title="CSS"/>
          <Tab modificatorClass="tab_place_techs" title="JS"/>
          <Tab modificatorClass="tab_place_techs" title="React"/>
          <Tab modificatorClass="tab_place_techs" title="Git"/>
          <Tab modificatorClass="tab_place_techs" title="Express.js"/>
          <Tab modificatorClass="tab_place_techs" title="mongoDB"/>
        </NavTab>
      </div>

    </section>
  );
}

export default Techs;

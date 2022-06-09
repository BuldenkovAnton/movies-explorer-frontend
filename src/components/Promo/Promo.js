import React from "react";
import NavTab from "../NavTab/NavTab";
import Tab from "../Tab/Tab";

function Promo() {
  return (
    <section className="app__promo promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>

      <NavTab modificatorClass="navtab_place_promo">
        <Tab
          modificatorClass="tab_place_promo"
          title="О проекте"
          href="#about-project"
        />
        <Tab
          modificatorClass="tab_place_promo"
          title="Технологии"
          href="#techs"
        />
        <Tab
          modificatorClass="tab_place_promo"
          title="Студент"
          href="#about-me"
        />
      </NavTab>
    </section>
  );
}

export default Promo;

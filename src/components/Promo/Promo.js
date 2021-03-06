import React from "react";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="app__wrapper app__promo promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>

      <NavTab />
    </section>
  );
}

export default Promo;

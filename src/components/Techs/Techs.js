import React from "react";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">
          Технологии
        </h2>

        <h3 className="techs__slogan">7 технологий</h3>
        <p className="techs__subslogan">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>Git</li>
          <li>Express.js</li>
          <li>mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
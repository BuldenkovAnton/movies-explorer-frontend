import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="page__about-project about-project">
      <SectionTitle mixClass="about-project__title">
        О проекте
      </SectionTitle>

      <div className="about-project__plan">
        <div className="about-project__subtitle about-project__blocks">
          Дипломный проект включал 5 этапов
        </div>
        <div className="about-project__subtitle about-project__time">
          На выполнение диплома ушло 5 недель
        </div>
        <div className="about-project__column about-project__column_first">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </div>
        <div className="about-project__column about-project__column_second">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__progress about-project__progress_first">
          1 неделя
        </div>
        <div className="about-project__progress about-project__progress_second">
          4 недели
        </div>
        <div className="about-project__theme about-project__theme_first">
          Back-end
        </div>
        <div className="about-project__theme about-project__theme_second">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
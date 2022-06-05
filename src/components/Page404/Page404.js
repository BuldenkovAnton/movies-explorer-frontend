import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <section className="page404">
      <div className="page404__container">
        <h2 className="page404__code">404</h2>
        <p className="page404__title">Страница не найдена</p>
      </div>
      <Link className="link page404__link" to="/">Назад</Link>

    </section>
  );
}

export default Page404;
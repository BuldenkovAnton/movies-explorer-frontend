import React from "react";
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const searchHandler = (e) => {
    e.preventDefault();

    console.log('поиск по базе фильмов');
  }

  return (
    <section className="search-form" aria-label="Поиск фильмов">
      <form className="search-form__form" name="search" onSubmit={searchHandler}>
        <fieldset className="search-form__fieldset">
          <img className="search-form__icon" src={searchIcon} alt="Поиск"/>
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__submit">Найти</button>
        </fieldset>
        <span className="search-form__seperate"></span>
        <fieldset className="search-form__fieldset">
          <FilterCheckbox />
        </fieldset>
      </form>

      <hr className="search-form__hr" />
    </section>
  );
}

export default SearchForm;
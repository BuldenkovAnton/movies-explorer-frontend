import React, { useState } from "react";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIsMiniMovie, setSearchIsMiniMovie] = useState(true);

  const changeSearchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const changeSearchIsMiniMovieHandler = (e) => {
    setSearchIsMiniMovie(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({ query: searchQuery, check: searchIsMiniMovie });
  };

  return (
    <section className="search-form" aria-label="Поиск фильмов">
      <form
        className="search-form__form"
        name="search"
        onSubmit={submitHandler}
      >
        <div className="search-form__container">
          <fieldset className="search-form__fieldset search-form__fieldset_input">
            <img className="search-form__icon" src={searchIcon} alt="Поиск" />
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              value={searchQuery}
              onChange={changeSearchQueryHandler}
            />
            <button className="search-form__submit">Найти</button>
          </fieldset>
          <span className="search-form__seperate"></span>
          <fieldset className="search-form__fieldset search-form__fieldset_switch">
            <FilterCheckbox
              title="Короткометражки"
              isChecked={searchIsMiniMovie}
              onChange={changeSearchIsMiniMovieHandler}
            />
          </fieldset>
        </div>

        <FilterCheckbox
          mixClass="filter-checkbox_show_tablet"
          title="Короткометражки"
          isChecked={searchIsMiniMovie}
          onChange={changeSearchIsMiniMovieHandler}
        />
      </form>

      <hr className="search-form__hr" />
    </section>
  );
}

export default SearchForm;

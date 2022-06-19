import React, { useCallback } from "react";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ query, queryIsMiniMovie, onSubmit, onChangeQuery, onChangeIsMiniMovie }) {
  const changeQueryHandler = useCallback((e) => {
    onChangeQuery(e.target.value);
  }, [onChangeQuery]);

  const changeIsMiniMovieHandler = useCallback((e) => {
    onChangeIsMiniMovie(e.target.checked);

    onSubmit();
  }, [onChangeIsMiniMovie, onSubmit]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

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
              name="name"
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              value={query}
              onChange={changeQueryHandler}
            />
            <button className="search-form__submit">Найти</button>
          </fieldset>
          <span className="search-form__seperate"></span>
          <fieldset className="search-form__fieldset search-form__fieldset_switch">
            <FilterCheckbox
              title="Короткометражки"
              isChecked={queryIsMiniMovie}
              onChange={changeIsMiniMovieHandler}
            />
          </fieldset>
        </div>

        <FilterCheckbox
          mixClass="filter-checkbox_show_tablet"
          title="Короткометражки"
          isChecked={queryIsMiniMovie}
          onChange={changeIsMiniMovieHandler}
        />
      </form>

      <hr className="search-form__hr" />
    </section>
  );
}

export default SearchForm;

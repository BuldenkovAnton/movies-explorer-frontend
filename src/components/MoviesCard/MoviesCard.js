import React from "react";
import iconMovieNotSaved from "../../images/movie_not_save.svg";
import iconMovieSaved from "../../images/movie_save.svg";
import iconMovieSavedDelete from "../../images/movie_delete.svg";
import { getHummanDuration } from "../../utils/time";

function MoviesCard({
  movie,
  isSaved = false,
  onSaveMovie = null,
  onDeleteMovie = null,
}) {
  const saveHelper = (e) => {
    e.preventDefault();
    onSaveMovie(movie);
  };

  const deleteHelper = (e) => {
    e.preventDefault();

    onDeleteMovie(movie._id);
  };

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        {!isSaved && onSaveMovie && (
          <button className="movie-card__button" onClick={saveHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieNotSaved}
              alt="Добавить в сохраненые"
            />
          </button>
        )}
        {isSaved && (
          <button className="movie-card__button">
            <img
              className="movie-card__icon"
              src={iconMovieSaved}
              alt="Сохранено"
            />
          </button>
        )}
        {onDeleteMovie && (
          <button className="movie-card__button" onClick={deleteHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieSavedDelete}
              alt="Удалить из сохраненых"
            />
          </button>
        )}
        <p className="movie-card__duration">
          {getHummanDuration(movie.duration)}
        </p>
      </div>
      <img
        className="movie-card__image"
        src={movie.image?.url || movie.image}
        alt={movie.nameRU}
      />
    </article>
  );
}

export default MoviesCard;

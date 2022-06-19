import React, { useCallback } from "react";
import iconMovieNotSaved from "../../images/movie_not_save.svg";
import iconMovieSaved from "../../images/movie_save.svg";
import iconMovieSavedDelete from "../../images/movie_delete.svg";
import { getHummanDuration } from "../../utils/time";

function MoviesCard({ movie, saveMovie = null, deleteMovie = null }) {
  const onSaveHelper = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      saveMovie(movie);
    },
    [saveMovie, movie]
  );

  const onDeleteHelper = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      deleteMovie(movie._id);
    },
    [deleteMovie, movie]
  );

  return (
    <a
      href={movie.trailerLink}
      target="_blank"
      className="movie-card"
      rel="noreferrer"
    >
      <div className="movie-card__header">
        <h2 className="movie-card__title">{movie.nameRU}</h2>

        {saveMovie && deleteMovie && !movie._id && (
          <button className="movie-card__button" onClick={onSaveHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieNotSaved}
              alt="Добавить в сохраненые"
            />
          </button>
        )}

        {saveMovie && deleteMovie && movie._id && (
          <button className="movie-card__button" onClick={onDeleteHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieSaved}
              alt="Сохранено"
            />
          </button>
        )}

        {!saveMovie && deleteMovie && movie._id && (
          <button className="movie-card__button" onClick={onDeleteHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieSavedDelete}
              alt="Удалить из сохраненых"
            />
          </button>
        )}

        {/* {!isSaved && onSaveMovie && (
          <button className="movie-card__button" onClick={saveHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieNotSaved}
              alt="Добавить в сохраненые"
            />
          </button>
        )}
        {isSaved && (
          <button className="movie-card__button" onClick={deleteHelper}>
            <img
              className="movie-card__icon"
              src={iconMovieSaved}
              alt="Сохранено"
            />
          </button>
        )}
        {onDeleteMovie && (

        )} */}
        <p className="movie-card__duration">
          {getHummanDuration(movie.duration)}
        </p>
      </div>
      <img
        className="movie-card__image"
        src={movie.image?.url || movie.image}
        alt={movie.nameRU}
      />
    </a>
  );
}

export default MoviesCard;

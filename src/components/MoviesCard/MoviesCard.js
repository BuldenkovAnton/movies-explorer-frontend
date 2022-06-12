import React from "react";
import iconMovieNotSaved from "../../images/movie_not_save.svg";
import iconMovieSaved from "../../images/movie_save.svg";
import iconMovieSavedDelete from "../../images/movie_delete.svg";
import { getHummanDuration } from "../../utils/time";

function MoviesCard({ movie, onSaveMovie }) {

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{ movie.nameRU }</h2>
        <img className="movie-card__icon" src={iconMovieNotSaved} alt="Добавить в сохраненые" />
        <p className="movie-card__duration">{ getHummanDuration(movie.duration) }</p>
      </div>
      <img className="movie-card__image" src={movie.image?.url} alt={movie.nameRU} />
    </article>
  );
}

export default MoviesCard;
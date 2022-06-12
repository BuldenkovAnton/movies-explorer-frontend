import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  nameKey,
  isSaved = false,
  onSaveMovie = null,
  onDeleteMovie = null,
}) {
  return (
    <>
      {movies && (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li className="movies-list__item" key={movie[nameKey]}>
              <MoviesCard
                movie={movie}
                isSaved={movie.isSaved}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            </li>
          ))}
        </ul>
      )}
      {movies.length === 0 && (
        <p className="movies-list__empty">
          Воспользуйтесь поиском, чтобы найти фильмы
        </p>
      )}
    </>
  );
}

export default MoviesCardList;

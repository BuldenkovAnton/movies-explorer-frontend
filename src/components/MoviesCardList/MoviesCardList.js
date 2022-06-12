import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, nameKey, isSaved = false, onSaveMovie = null, onDeleteMovie = null }) {
  return (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li className="movies-list__item" key={movie[nameKey]}>
              <MoviesCard movie={movie} isSaved={movie.isSaved} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />
            </li>
          ))}
        </ul>
  );
}

export default MoviesCardList;
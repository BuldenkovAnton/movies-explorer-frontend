import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onSaveMovie = null, }) {
  return (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li className="movies-list__item" key={movie.id}>
              <MoviesCard movie={movie} onSaveMovie={onSaveMovie} />
            </li>
          ))}
        </ul>
  );
}

export default MoviesCardList;
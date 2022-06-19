import React, { useCallback, useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, saveMovie = null, deleteMovie = null }) {
  const [cardsFirstShow, setCardsFirstShow] = useState(0);
  const [cardsAddInShow, setCardsAddInShow] = useState(0);
  const [cardsAddShowed, setCardsAddShowed] = useState(0);
  const [moviesList, setMoviesList] = useState(movies);

  useEffect(() => {
    let timer = null;

    const resizeHandler = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        const width = window.innerWidth;
        if (width >= 1200) {
          setCardsFirstShow(12);
          setCardsAddInShow(3);
        }
        if (width >= 750 && width < 1200) {
          setCardsFirstShow(8);
          setCardsAddInShow(2);
        }
        if (width < 520) {
          setCardsFirstShow(5);
          setCardsAddInShow(2);
        }
      }, 1000);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const newMoviesList = movies.filter((movie, index, array) => {
      return index + 1 <= cardsFirstShow + cardsAddShowed;
    });
    setMoviesList(newMoviesList);
  }, [movies, cardsFirstShow, cardsAddShowed]);

  const showMoreCardHandler = useCallback(() => {
    setCardsAddShowed(prevValue => prevValue + cardsAddInShow)
  }, [cardsAddInShow]);

  return (
    <>
      <ul className="movies-list">
        {moviesList.map((movie) => (
          <li className="movies-list__item" key={movie.id}>
            <MoviesCard
              movie={movie}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
            />
          </li>
        ))}
      </ul>

      {(movies.length > cardsFirstShow + cardsAddShowed) && (
        <button className="movies-list__button-load" onClick={showMoreCardHandler}>Еще</button>
      )}
    </>
  );
}

export default MoviesCardList;

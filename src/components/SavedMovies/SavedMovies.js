import React, { useCallback, useEffect, useState } from "react";
import filterForMovies from "../../utils/filter";
import { setMoviesSavedInLocalStorage } from "../../utils/localStorage";
import api from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(setAlertError) {
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [query, setQuery] = useState("");
  const [queryIsMiniMovie, setQueryIsMiniMovie] = useState(false);

  const getSavedMoviesHandler = useCallback(() => {
    api
      .getSavedMovies()
      .then((movies) => {
        setMoviesSaved(movies);
        setMoviesSavedInLocalStorage(movies);
      })
      .catch((codeError) => {
        let message =
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
        setAlertError(message);
      });
  }, [setAlertError]);

  const deleteMovieHandler = useCallback((id) => {
    api
      .deleteMovie(id)
      .then((data) => {
        setMoviesSaved((prevState) => {
          return prevState.filter((movie) => movie._id !== id);
        });
      })
      .catch((errorCode) => {
        let message = "На сервере произошла ошибка";
        setAlertError(message);
      });
  }, [setAlertError]);

  const changeQueryHandler = useCallback((value) => {
    setQuery(value);
  }, []);

  const changeIsMiniMovieHandler = useCallback((value) => {
    setQueryIsMiniMovie(value);
  }, []);

  const searchHandler = useCallback(() => {
    setIsSearching(true);
  }, []);

  useEffect(() => {
    getSavedMoviesHandler();
  }, []);

  useEffect(() => {
    const filterMovies = filterForMovies(moviesSaved, query, queryIsMiniMovie);
    setMoviesFiltered(filterMovies);
  }, [moviesSaved, isSearching, queryIsMiniMovie]);

  useEffect(() => {
    setIsSearching(false);
  }, [moviesFiltered]);

  return (
    <>
      <Header mixClass="app__wrapper app__header" />
      <main className="app__movie movies" aria-label="Сохраненые фильмы">
        <SearchForm
          onSubmit={searchHandler}
          query={query}
          queryIsMiniMovie={queryIsMiniMovie}
          onChangeQuery={changeQueryHandler}
          onChangeIsMiniMovie={changeIsMiniMovieHandler}
        />
        {isSearching && <Preloader />}

        {!isSearching && moviesFiltered.length > 0 && (
          <MoviesCardList
            movies={moviesFiltered}
            nameKey="_id"
            deleteMovie={deleteMovieHandler}
          />
        )}

        {!isSearching && moviesFiltered.length === 0 && (
          <p className="movies-list__empty">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

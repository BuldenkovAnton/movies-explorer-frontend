import React, { useCallback, useEffect, useState } from "react";
import filterForMovies from "../../utils/filter";
import { getMoviesSavedFromLocalStorage } from "../../utils/localStorage";
import api from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  const [moviesError, setMoviesError] = useState("");
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [query, setQuery] = useState("");
  const [queryIsMiniMovie, setQueryIsMiniMovie] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("moviesSaved"))
      setMoviesSaved(getMoviesSavedFromLocalStorage());
    else {
      api
        .getSavedMovies()
        .then((movies) => setMoviesSaved(movies))
        .catch(() => {
          let message =
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
          setMoviesError(message);
        });
    }
  }, []);

  useEffect(() => {
    const filterMovies = filterForMovies(moviesSaved, query, queryIsMiniMovie);
    setMoviesFiltered(filterMovies);
  }, [moviesSaved, isSearching, queryIsMiniMovie]);

  useEffect(() => {
    setIsSearching(false);
  }, [moviesFiltered]);

  const deleteMovieHandler = useCallback((id) => {
    console.log("удалить фильм", id);
    api.deleteMovie(id).then((data) => {
      setMoviesSaved((prevState) => {
        return prevState.filter((movie) => movie._id !== id);
      });
    });
  }, []);

  const changeQueryHandler = useCallback((value) => {
    setQuery(value);
  }, []);

  const changeIsMiniMovieHandler = useCallback((value) => {
    setQueryIsMiniMovie(value);
  }, []);

  const searchHandler = useCallback(() => {
    setIsSearching(true);
  }, []);

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
        <MoviesCardList
          movies={moviesFiltered}
          nameKey="_id"
          deleteMovie={deleteMovieHandler}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

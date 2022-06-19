import React, { useCallback, useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import movieApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import filterForMovies from "../../utils/filter";
import { setImageDomain, createMovieForBase } from "../../utils/movies";
import {
  getMoviesAllFromLocalStorage,
  getMoviesFilteredFromLocalStorage,
  getMoviesSavedFromLocalStorage,
  getSearchIsMiniFromLocalStorage,
  getSearchQueryFromLocalStorage,
  setMoviesAllInLocalStorage,
  setMoviesFilteredInLocalStorage,
  setMoviesSavedInLocalStorage,
  setSearchIsMiniInLocalStorage,
  setSearchQueryInLocalStorage,
} from "../../utils/localStorage";

function Movies({ setAlertError }) {
  const [moviesAll, setMoviesAll] = useState([]);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [moviesError, setMoviesError] = useState("");

  const [isSearching, setIsSearching] = useState(false);
  const [firstSearching, setFirstSearching] = useState(true);

  const [query, setQuery] = useState("");
  const [queryIsMiniMovie, setQueryIsMiniMovie] = useState(false);

  const getMoviesFromBaseHandle = useCallback(() => {
    movieApi
      .getAllMovies()
      .then((items) => {
        return items.map((item) => setImageDomain(item));
      })
      .then((items) => {
        setMoviesAll(items);
        setMoviesAllInLocalStorage(items);
      })
      .catch(() => {
        let message =
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
        setMoviesError(message);
      });
  }, []);

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

  const filterHandler = useCallback(() => {

    const filterMovies = filterForMovies(moviesAll, query, queryIsMiniMovie);
    const newMovies = filterMovies.map((movie) => {
      const saved = moviesSaved.find((item) => item.movieId === movie.id);
      movie._id = saved ? saved._id : null;
      return movie;
    });

    setMoviesFiltered(newMovies);

    setSearchQueryInLocalStorage(query);
    setSearchIsMiniInLocalStorage(queryIsMiniMovie);
    setMoviesFilteredInLocalStorage(moviesFiltered);
  }, [moviesAll, moviesSaved, query, queryIsMiniMovie, moviesFiltered]);

  const searchHandler = useCallback(() => {
    setMoviesError("");

    if (!query) {
      setMoviesError("Нужно ввести ключевое слово");
      return;
    }

    if (firstSearching) {
      setFirstSearching(false);
    }

    setIsSearching(true);
  }, [firstSearching, query]);

  const changeQueryHandler = useCallback((value) => {
    setQuery(value);
  }, []);

  const changeIsMiniMovieHandler = useCallback((value) => {
    setQueryIsMiniMovie(value);
  }, []);

  const saveMovieHandler = useCallback(
    (movie) => {
      const movieSave = createMovieForBase(movie);

      api
        .saveMovie(movieSave)
        .then((data) => {
          setMoviesSaved((prevState) => {
            return [...prevState, data];
          });
        })
        .catch((errorCode) => {
          let message = "При сохранении фильма на сервере произошла ошибка";
          setAlertError(message);
        });
    },
    [setAlertError]
  );

  const deleteMovieHandler = useCallback(
    (id) => {
      api
        .deleteMovie(id)
        .then((data) => {
          setMoviesSaved((prevState) => {
            return prevState.filter((movie) => movie._id !== id);
          });
        })
        .catch((errorCode) => {
          let message = "При удалении фильма на сервере произошла ошибка";
          setAlertError(message);
        });
    },
    [setAlertError]
  );

  useEffect(() => {
    getSearchQueryFromLocalStorage(setQuery);
    getSearchIsMiniFromLocalStorage(setQueryIsMiniMovie);
    getMoviesFilteredFromLocalStorage(setMoviesFiltered);
    getMoviesSavedFromLocalStorage(setMoviesSaved);
    getMoviesAllFromLocalStorage(setMoviesAll);
  }, []);

  useEffect(() => {
    getSavedMoviesHandler();
  }, []);

  useEffect(() => {
    setMoviesSavedInLocalStorage(moviesSaved);
  }, [moviesSaved]);

  useEffect(() => {
    if (firstSearching) return;

    getMoviesFromBaseHandle();
  }, [firstSearching]);

  useEffect(() => {
    if (moviesAll.length > 0) {
      filterHandler();
    }
  }, [moviesAll, moviesSaved, queryIsMiniMovie]);

  useEffect(() => {
    if (moviesAll.length > 0 && isSearching) {
      setMoviesFilteredInLocalStorage(moviesFiltered);
    }
    setIsSearching(false);
  }, [moviesFiltered]);

  return (
    <>
      <Header mixClass="app__wrapper app__header" />
      <main className="app__movie movies" aria-label="Фильмы">
        <SearchForm
          onSubmit={searchHandler}
          query={query}
          queryIsMiniMovie={queryIsMiniMovie}
          onChangeQuery={changeQueryHandler}
          onChangeIsMiniMovie={changeIsMiniMovieHandler}
        />

        {isSearching && <Preloader />}

        {!isSearching && moviesError && (
          <p className="movies-list__empty">{moviesError}</p>
        )}

        {!isSearching && moviesFiltered.length > 0 && (
          <MoviesCardList
            movies={moviesFiltered}
            nameKey="id"
            saveMovie={saveMovieHandler}
            deleteMovie={deleteMovieHandler}
          />
        )}

        {!firstSearching && !isSearching && moviesFiltered.length === 0 && (
          <p className="movies-list__empty">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;

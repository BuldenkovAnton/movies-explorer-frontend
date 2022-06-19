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

function Movies({ setAlertError }) {
  const [moviesError, setMoviesError] = useState('');
  const [moviesAll, setMoviesAll] = useState([]);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  const [isSearching, setIsSearching] = useState(false);
  const [fisrtSearching, setFirstSearching] = useState(true);

  const [query, setQuery] = useState("");
  const [queryIsMiniMovie, setQueryIsMiniMovie] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("movies"))
  //     setMoviesAll(JSON.parse(localStorage.getItem("movies")));
  //   if (localStorage.getItem("query"))
  //     setQuery(localStorage.getItem("query"));
  //   if (localStorage.getItem("qqueryIsMiniMovieery"))
  //     setQueryIsMiniMovie(localStorage.getItem("queryIsMiniMovie"));
  //   if (localStorage.getItem("moviesFiltered"))
  //     setMoviesFiltered(JSON.parse(localStorage.getItem("moviesFiltered")));
  //   if (localStorage.getItem("moviesSaved"))
  //     setMoviesSaved(JSON.parse(localStorage.getItem("moviesSaved")));
  // }, []);






  useEffect(() => {
    if (fisrtSearching) return;

    getMoviesFromBaseHandle();
    getSavedMoviesHandler();
  }, [fisrtSearching]);

  useEffect(() => {
    console.log('change movies start filter');
    if (moviesAll.length > 0) {
      console.log('movies.length > 0');
      setIsSearching(true);
      getFilteredMoviesHandler(query, queryIsMiniMovie);
    }
  }, [moviesAll, moviesSaved, isSearching, queryIsMiniMovie]);

  useEffect(() => {
    setIsSearching(false);
  }, [moviesFiltered]);



  const getSavedMoviesHandler = useCallback(() => {
    api.getSavedMovies().then((movies) => {
      setMoviesSaved(movies);
      localStorage.setItem("moviesSaved", JSON.stringify(movies));
    });
  });

  const getFilteredMoviesHandler = useCallback(
    (query, queryIsMiniMovie) => {
      console.log('getFilteredMoviesHandler');
      const filterMovies = filterForMovies(moviesAll, query, queryIsMiniMovie);
      console.log('filterMovies', filterMovies);
      const newMovies = filterMovies.map((movie) => {
        const saved = moviesSaved.find(item => {
          return item.movieId === movie.id
        });
        movie._id = saved ? saved._id : null;
        return movie;
      })

      console.log('filtered', newMovies);

      setMoviesFiltered(newMovies);
      localStorage.setItem("query", query);
      localStorage.setItem(
        "queryIsMiniMovie",
        queryIsMiniMovie
      );
      localStorage.setItem("moviesFiltered", JSON.stringify(moviesFiltered));
    },
    [moviesFiltered, moviesAll, moviesSaved]
  );

  const getMoviesFromBaseHandle = useCallback(() => {
    movieApi
      .getAllMovies()
      .then((items) => {
        return items.map((item) => {
          return setImageDomain(item);
        });
      })
      .then((items) => {
        setMoviesAll(items);
        localStorage.setItem("movies", JSON.stringify(items));
      })
      .catch(() => {
        let message =
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
        setMoviesError(message);
      })
      .finally(() => setIsSearching(false));
  }, []);

  const saveMovieHandler = useCallback((movie) => {
    console.log("сохранить фильм", movie);
    const movieSave = createMovieForBase(movie);

    api.saveMovie(movieSave).then((data) => {
      setMoviesSaved((prevState) => {
        return [...prevState, data];
      });
    });
  }, []);

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

    if (fisrtSearching) {
      console.log("searchHandler fisrtSearching", fisrtSearching);
      setFirstSearching(false);
      return;
    }
  }, [fisrtSearching]);

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

        {fisrtSearching && !moviesFiltered && (
          <p className="movies-list__empty">
            Воспользуйтесь поиском, чтобы найти фильм
          </p>
        )}

        {isSearching && <Preloader />}

        {moviesError && (
          <p className="movies-list__empty">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}

        {moviesFiltered && (
          <MoviesCardList
            movies={moviesFiltered}
            saveMovie={saveMovieHandler}
            deleteMovie={deleteMovieHandler}
          />
        )}

        {!fisrtSearching && !isSearching && moviesFiltered.length === 0 && (
          <p className="movies-list__empty">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;

export const setMoviesAllInLocalStorage = (movies) => {
  return localStorage.setItem("movies", JSON.stringify(movies));
};

export const setMoviesFilteredInLocalStorage = (movies) => {
  return localStorage.setItem("moviesFiltered", JSON.stringify(movies));
};

export const setMoviesSavedInLocalStorage = (movies) => {
  return localStorage.setItem("moviesSaved", JSON.stringify(movies));
};

export const setSearchQueryInLocalStorage = (query) => {
  return localStorage.setItem("searchQuery", query);
};

export const setSearchIsMiniInLocalStorage = (isMini) => {
  return localStorage.setItem("searchIsMini", isMini);
};

export const getMoviesAllFromLocalStorage = (movies) => {
  return JSON.parse(localStorage.getItem("movies"));
};

export const getMoviesFilteredFromLocalStorage = (movies) => {
  return JSON.parse(localStorage.getItem("moviesFiltered"));
};

export const getMoviesSavedFromLocalStorage = (movies) => {
  return JSON.parse(localStorage.getItem("moviesSaved"));
};

export const getSearchQueryFromLocalStorage = (query) => {
  return localStorage.getItem("searchQuery", query);
};

export const getSearchIsMiniFromLocalStorage = (isMini) => {
  return localStorage.getItem("searchIsMini", isMini);
};

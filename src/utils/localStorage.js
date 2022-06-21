function setInLocalStorage(name, value, isStringify = false) {
  if (isStringify) localStorage.setItem(name, JSON.stringify(value));
  else localStorage.setItem(name, value);
}

function getInLocalStorage(name, isStringify = false) {
  if (isStringify) return JSON.parse(localStorage.getItem(name));
  return localStorage.getItem(name);
}

export const setMoviesAllInLocalStorage = (movies = []) => {
  setInLocalStorage("movies", movies, true);
};

export const setMoviesFilteredInLocalStorage = (movies = []) => {
  setInLocalStorage("moviesFiltered", movies, true);
};

export const setMoviesSavedInLocalStorage = (movies = []) => {
  setInLocalStorage("moviesSaved", movies, true);
};

export const setSearchQueryInLocalStorage = (query = '') => {
  setInLocalStorage("searchQuery", query);
};

export const setSearchIsMiniInLocalStorage = (isMini = false) => {
  setInLocalStorage("searchIsMini", isMini, true);
};

export const getMoviesAllFromLocalStorage = (setter) => {
  if (localStorage.getItem("movies"))
    setter(getInLocalStorage("movies", true));
};

export const getMoviesFilteredFromLocalStorage = (setter) => {
  if (localStorage.getItem("moviesFiltered"))
    setter(getInLocalStorage("moviesFiltered", true));
};

export const getMoviesSavedFromLocalStorage = (setter) => {
  if (localStorage.getItem("moviesSaved"))
    setter(getInLocalStorage("moviesSaved", true));
};

export const getSearchQueryFromLocalStorage = (setter) => {
  if (localStorage.getItem("searchQuery"))
    setter(getInLocalStorage("searchQuery"));
};

export const getSearchIsMiniFromLocalStorage = (setter) => {
  if (localStorage.getItem("searchIsMini"))
    setter(getInLocalStorage("searchIsMini", true));
};

export const removeMoviesAllInLocalStorage = () => {
  localStorage.removeItem("movies");
};

export const removeMoviesFilteredInLocalStorage = () => {
  localStorage.removeItem("moviesFiltered");
};

export const removeMoviesSavedInLocalStorage = () => {
  localStorage.removeItem("moviesSaved");
};

export const removeSearchQueryInLocalStorage = () => {
  localStorage.removeItem("searchQuery");
};

export const removeSearchIsMiniInLocalStorage = () => {
  localStorage.removeItem("searchIsMini");
};
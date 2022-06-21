import { isMiniMovieDuration } from "./config";

export default function filterForMovies(movies, words, isMiniMovie) {
  const regex = new RegExp(words, "gi");
  return movies.filter((movie) => {
    return (
      (regex.test(movie.nameRU) || regex.test(movie.nameEN))
      && (isMiniMovie ? movie.duration <= isMiniMovieDuration : movie.duration >= 0)
    );
  });
}

import { imageDomain } from "./config";

export function setImageDomain(movie) {
  if (movie.image.url) movie.image.url = imageDomain + movie.image.url;
  if (movie.image.formats?.small?.url)
    movie.image.formats.small.url = imageDomain + movie.image.formats.small.url;
  if (movie.image.formats?.thumbnail?.url)
    movie.image.formats.thumbnail.url =
      imageDomain + movie.image.formats.thumbnail.url;
  return movie;
}

export function createMovieForBase(movie) {
  return {
    country: movie.county || "Страна не указана",
    director: movie.director || "Режиссер не указан",
    duration: movie.duration || 60,
    year: movie.year || 2022,
    description: movie.description || "Описание не указано",
    image: movie.image?.url || "https://startour.ru/images/no_image.png",
    trailerLink:
      movie.trailerLink ||
      "https://www.youtube.com/watch?v=lg4hcgtjDPc&feature=emb_logo",
    thumbnail:
      movie.image?.formats?.thumbnail?.url ||
      "https://startour.ru/images/no_image.png",
    movieId: movie.id,
    nameRU: movie.nameRU || "Название не указано",
    nameEN: movie.nameEN || "Name no set",
  };
}

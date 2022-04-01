import api from "../request";
import { NETWORKS, MOVIE_GENRES } from "../constants";

export const getOriginals = async () => {
  const originals = await api.get(
    `/discover/tv?with_networks=${NETWORKS.ORIGINALS}`
  );
  return originals?.data;
};

export const getGenres = async (genres) => {
  const genresList = [];
  for (const genreId in genres) {
    const list = await api.get(
      `/discover/movie?with_genres=${MOVIE_GENRES[genreId]}`
    );
    genresList.push(list?.data);
  }
  return genresList;
};

export const getTrending = async () => {
  const trending = await api.get("/trending/all/week");
  return trending?.data;
};

export const getTopRated = async () => {
  const topRated = await api.get("/movie/top_rated");
  return topRated?.data;
};

export const getMovieInfo = async (movieId, type) => {
  const info = await api.get(`/${type}/${movieId}`);
  return info?.data;
};

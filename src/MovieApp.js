import React, { useState, useEffect, useCallback } from "react";
import { MovieRow, FeaturedMovies, Spinner, NavBar } from "./components";
import { MOVIE_GENRES } from "./constants";
import {
  getOriginals,
  getGenres,
  getTrending,
  getTopRated,
  getMovieInfo,
} from "./services/movies";
import "./MovieApp.scss";

const getRandomMovie = (list) => {
  const sorted = Math.floor(Math.random() * (list?.items.length - 1));
  return list?.items[sorted];
};

export const MovieApp = () => {
  const [homeLists, setHomeLists] = useState(null);
  const [featured, setFeatured] = useState(null);

  const getFirstHighlight = useCallback(async () => {
    const randomMovie = getRandomMovie(homeLists?.[0]);
    const chosenInfo = await getMovieInfo(randomMovie.id, "tv");
    setFeatured(chosenInfo);
  }, [homeLists]);

  const getInitialLists = async () => {
    const originalsList = await getOriginals();
    const genresList = await getGenres(MOVIE_GENRES);
    const trendingList = await getTrending();
    const topRatedList = await getTopRated();
    const [action, comedy, horror, romance, documentary] = genresList || [];
    setHomeLists([
      {
        title: "Originals",
        items: originalsList?.results,
      },
      {
        title: "Trending",
        items: trendingList?.results,
      },
      {
        title: "Top Rated",
        items: topRatedList?.results,
      },
      {
        title: "Action",
        items: action?.results,
      },
      {
        title: "Comedy",
        items: comedy?.results,
      },
      {
        title: "Horror",
        items: horror?.results,
      },
      {
        title: "Romance",
        items: romance?.results,
      },
      {
        title: "Documentary",
        items: documentary?.results,
      },
      {
        title: "Originals",
        items: originalsList?.results,
      },
    ]);
  };

  useEffect(() => {
    getInitialLists();
  }, []);

  useEffect(() => {
    homeLists && getFirstHighlight();
  }, [getFirstHighlight, homeLists]);

  return (
    <>
      {featured && homeLists ? (
        <main>
          <section className="lists">
            {homeLists && <NavBar />}
            {featured && <FeaturedMovies featured={featured} />}
            {homeLists && <MovieRow list={homeLists} />}
          </section>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

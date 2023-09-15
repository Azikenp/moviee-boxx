import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const MovieContext = createContext({});

//create the provide object
export const MovieProvider = ({ children }) => {
  // const [movieData, setMovieData] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState();

  // const getMovieData = async () => {
  //   try {
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=476bef949bb518e1997009b6d1bf69a4`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => json);
  //     setMovieData(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=476bef949bb518e1997009b6d1bf69a4`
      )
        .then((res) => res.json())
        .then((json) => json);
      setTrendingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResults = async (query) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=476bef949bb518e1997009b6d1bf69a4`
      )
        .then((res) => res.json())
        .then((json) => json);
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=476bef949bb518e1997009b6d1bf69a4`
      )
        .then((res) => res.json())
        .then((json) => json);
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    // getMovieData()
    getTrendingMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        movieDetails,
        getMovieDetails,
        searchResults,
        getSearchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

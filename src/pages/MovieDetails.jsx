import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";
import { MovieContext, MovieProvider } from "../context/Context";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  let { movieId } = useParams();
  // const { getMovieDetails, movieDetails } = useContext(MovieContext);
  // console.log(movieDetails);

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

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className="flex">
      <Sidebar/>
      <MovieDetail data={movieDetails}/>
    </div>
  );
};

export default MovieDetails;

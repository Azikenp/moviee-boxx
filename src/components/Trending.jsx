import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Context";
import Card from "./Card";

const Trending = () => {
  const { trendingMovies } = useContext(MovieContext);

  return (
    <div className="py-[2.62rem] px-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[34px] font-bold text-black">Trending Movies</h1>
        <Link className="md:flex gap-1 text-[#e11d48] font-semibold hidden" to="/">
          <p>see more</p>
          <span className="font-bold">&gt;</span>
        </Link>
      </div>
      <div className="md:grid items-center lg:grid-cols-4 md:grid-cols-3 sm:flex sm:flex-col gap-x-[3.4rem]">
        {trendingMovies
          ? trendingMovies.slice(0, 10).map((movie) => {
              return (
                <Card className="mb-5" movie={movie} key={movie.id} data-testid="movie-card"/>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Trending;

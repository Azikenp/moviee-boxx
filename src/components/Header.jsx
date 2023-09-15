import React, { useContext } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { MovieContext } from "../context/Context";

const Header = () => {
  const { trendingMovies } = useContext(MovieContext);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies && trendingMovies[0].backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "85vh",
      }}
      className="py-6 px-12 md:px-20 min-h-[100vh] md:min-h-[85vh]"
    >
      <div className="absolute top-0 left-0 bg-black w-[100vw] md:h-[85vh] h-[100vh] bg-opacity-20"></div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;

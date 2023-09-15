import React, { useContext } from "react";
import { MovieContext } from "../context/Context";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import play from "../assets/Play.svg";

const Hero = () => {
  const { trendingMovies } = useContext(MovieContext);

  return (
    <div className="flex items-center justify-between md:flex-row sm:flex-col py-36">
      <div className="flex flex-col md:w-[35%] sm:w-full">
        <h1 className="text-white md:text-[45px] text-[50px] font-semibold mb-4">
          {trendingMovies && trendingMovies[2].title}
        </h1>

        <div className="flex items-center text-white mb-2">
          <img className="mr-2" src={imdb} alt="imdb logo" />
          <p className="mr-5">
            <span>86.0</span>
            <span>/</span>
            <span>100</span>
          </p>
          <img className="mr-2" src={tomato} alt="tomato ratings" />
          <p>97%</p>
        </div>

        <div className="text-white mb-3">
          <p className="font-semibold">
            {trendingMovies && trendingMovies[2].overview}
          </p>
        </div>

        <button className="flex items-center justify-between text-white bg-[#e11d48] w-[150px] rounded py-2 px-3 hover:scale-110 ease-in duration-300">
          <img src={play} alt="" />
          <p className="uppercase text-[13px] font-semibold ">watch trailer</p>
        </button>
      </div>

      <div className="md:flex flex-col items-center text-[13px] absolute top-[50%] right-3 right-100 font-semibold hidden text-gray-400">
        <span>1</span>
        <span>2</span>
        <span className="relative text-white text-[16px] after:w-4 after:h-[2px] after:bg-white after:absolute after:right-4 after:top-[11px]">3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default Hero;

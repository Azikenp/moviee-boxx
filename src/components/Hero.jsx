import React, { useContext } from "react";
import { MovieContext } from "../context/Context";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import play from "../assets/Play.svg";

const Hero = () => {
  const { trendingMovies } = useContext(MovieContext);

  // Input date string in ISO format (YYYY-MM-DD)
  const inputDateStr = "2021-12-15";

  // Create a Date object using the input date string
  const localDate = new Date(inputDateStr);

  // Convert the local date to UTC by using UTC methods
  const utcYear = localDate.getUTCFullYear();
  const utcMonth = localDate.getUTCMonth();
  const utcDay = localDate.getUTCDate();
  const utcHours = localDate.getUTCHours();
  const utcMinutes = localDate.getUTCMinutes();
  const utcSeconds = localDate.getUTCSeconds();

  // Create a new date object with the UTC components
  const utcDate = new Date(
    Date.UTC(utcYear, utcMonth, utcDay, utcHours, utcMinutes, utcSeconds)
  );

  // Format the UTC date as desired
  const utcDateString =
    utcDate.toDateString() + " " + utcDate.toTimeString().slice(0, 8) + " GMT";

  console.log(utcDateString); // Display the formatted UTC date

  return (
    <div className="flex items-center justify-between md:flex-row sm:flex-col py-36 z-10">
      <div className="flex flex-col z-10 md:w-[35%] sm:w-full">
        <h1 className="text-white z-10 md:text-[45px] text-[50px] font-semibold mb-4">
          {trendingMovies && trendingMovies[0].title}
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
            {trendingMovies && trendingMovies[0].overview}
          </p>
        </div>

        <button className="flex items-center justify-between text-white bg-[#e11d48] w-[150px] rounded py-2 px-3 hover:scale-110 ease-in duration-300">
          <img src={play} alt="" />
          <p className="uppercase text-[13px] font-semibold ">watch trailer</p>
        </button>
      </div>

      <div className="md:flex flex-col hidden">
        <p>right</p>
      </div>
    </div>
  );
};

export default Hero;

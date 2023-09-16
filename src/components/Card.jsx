import React, { useContext } from "react";
import imdb from "../assets/imdb.svg";
import fallbackImage from "../assets/imagefallback.jpg";
import tomato from "../assets/tomato.svg";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Context";

const Card = ({ movie }) => {
  const { saved, setSaved, savedItems, setSavedItems } =
    useContext(MovieContext);

  // // Input date string in ISO format (YYYY-MM-DD)
  // const inputDateStr =
  //   movie && movie.release_date ? movie.release_date : movie.first_air_date;

  // // Create a Date object using the input date string
  // const localDate = new Date(inputDateStr);

  // // Convert the local date to UTC by using UTC methods
  // const utcYear = localDate.getUTCFullYear();
  // const utcMonth = localDate.getUTCMonth();
  // const utcDay = localDate.getUTCDate();

  // // Create a new date object with the UTC components
  // const utcDate = new Date(utcYear, utcMonth, utcDay, 0, 0, 0);

  // // Format the UTC date as desired
  // const utcDateString = utcDate.toISOString();

  const handleSaved = (movieId) => {
    // Toggle the 'saved' state
    setSaved((prevSaved) => !prevSaved);

    if (Array.isArray(savedItems)) {
      if (savedItems.includes(movieId)) {
        // If the movieId is already in savedItems, remove
        let savedMovies = savedItems.filter((movie) => movie !== movieId);
        setSavedItems(savedMovies);
      } else {
        // If the movieId is not in savedItems, add it
        setSavedItems((prevItems) => [...prevItems, movieId]);
      }
    } else {
      // If savedItems is not an array, initialize it with an array containing movieId
      setSavedItems([movieId]);
    }
  };

  return (
    <>
      <div className="relative mb-7 hover:scale-110 ease-in duration-300">
        <Link
          to={`/${movie.id}`}
          className="mb-7 w-[14rem] md:w-[13rem] lg:w-[14rem]"
        >
          <img
            className="w-full h-[20rem] rounded-t-sm"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : fallbackImage
            }
            alt="movie poster"
            data-testid="movie-poster"
          />
          <span
            className="text-[8px] text-gray-400 uppercase font-semibold"
            data-testid="movie-release-date"
          >
            {movie && movie.release_date
              ? movie.release_date
              : movie.first_air_date
              ? movie.first_air_date
              : "No date provided"}
          </span>
          <p
            className="font-semibold text-[14px] mb-1.5"
            data-testid="movie-title"
          >
            {movie.title ? movie.title : movie.name}
          </p>
          <div className="flex items-center justify-between text-black mb-2">
            <div className="flex text-[11px] text-gray-500">
              <img className="mr-2 w-[24px]" src={imdb} alt="imdb logo" />
              <p className="mr-5">
                <span>86.0</span>
                <span>/</span>
                <span>100</span>
              </p>
            </div>
            <div className="flex text-[11px] text-gray-500">
              <img className="w-[13px]" src={tomato} alt="tomato ratings" />
              <p className="mx-[5px]">97%</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 capitalize">
            Action, adventure, triller
          </p>
        </Link>
        <div className="flex items-center justify-between w-full px-3 absolute top-3">
          <span className="p-2 py-0.5 bg-gray-500 bg-opacity-70 rounded-full font-semibold text-black text-[10px] uppercase">
            Tv series
          </span>
          <button onClick={() => handleSaved(movie.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="red"
            >
              <g filter="url(#a)">
                <ellipse
                  cx={15}
                  cy={15.184}
                  fill={`${
                    movie && savedItems.includes(movie.id) ? "red" : "#F3F4F6"
                  }`}
                  fillOpacity={0.5}
                  rx={15}
                  ry={14.605}
                />
              </g>
              <path
                fill="#D1D5DB"
                fillRule="evenodd"
                d="M8.172 10.483c1.562-1.521 4.094-1.521 5.656 0L15 11.623l1.172-1.14c1.562-1.521 4.094-1.521 5.656 0a3.823 3.823 0 0 1 0 5.508L15 22.64l-6.828-6.65a3.823 3.823 0 0 1 0-5.507Z"
                clipRule="evenodd"
              />
              <defs>
                <filter
                  id="a"
                  width={34}
                  height={33.211}
                  x={-2}
                  y={-1.421}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1820_401"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1820_401"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

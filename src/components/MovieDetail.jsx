import React, { useContext } from "react";
import twoTickets from "../assets/Two-Tickets.svg";
import logoSvg from "../assets/Logo.svg";
import list from "../assets/List.svg";
import fallbackImage from "../assets/imagefallback.jpg";
import listWhite from "../assets/List-white.png";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Context";

const MovieDetail = ({ data }) => {
  const { saved, setSaved, savedItems, setSavedItems } =
    useContext(MovieContext);

  // Input date string in ISO format (YYYY-MM-DD)
  const inputDateStr = data && data.release_date;

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
      {data && data.length !== 0 ? (
        <div className="relative flex flex-col md:pt-9 pt-4 md:w-[70%] w-full px-4 md:px-0 md:pr-4 pb-3 lg:pb-0">
          <Link className="md:hidden items-center mb-[10px] px-4" to="/">
            <img className="w-[120px]" src={logoSvg} alt="logo" />
            <p className="text-black font-bold absolute left-[76px] top-5 text-[15px]">
              MovieBox
            </p>
          </Link>
          <img
            className="rounded-[20px] w-full h-[40%]"
            src={
              data && data.backdrop_path
                ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                : fallbackImage
            }
            alt=""
          />

          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center">
              <div className="relative">
                <h3
                  className="text-[18px] font-semibold text-black mr-6 after:w-2 after:h-2 after:bg-gray-600 after:absolute after:right-2 after:top-2.5 after:rounded-[50%]"
                  data-testid="movie-title"
                >
                  {data && data.title}
                </h3>
              </div>
              <div className="relative">
                <p
                  className="text-[18px] font-semibold text-black mr-6 after:w-2 after:h-2 after:bg-gray-600 after:absolute after:right-2 after:top-2.5 after:rounded-[50%]"
                  data-testid="movie-release-date"
                >
                  {data && data.release_date !== ""
                    ? utcDateString
                    : "Date not provided"}
                </p>
              </div>
              <div className="relative">
                <p className="lg:block hidden capitalize text-[18px] font-semibold text-black mr-6 after:w-2 after:h-2 after:bg-gray-600 after:absolute after:right-2 after:top-2.5 after:rounded-[50%]">
                  pg-13
                </p>
              </div>
              <p
                className="text-[18px] font-semibold text-black mr-6"
                data-testid="movie-runtime"
              >
                {data && data.runtime} mins
              </p>
              <div className="lg:flex gap-x-3 hidden text-[13px] font-bold text-[#e11d48]">
                <p className="border-[1px] border-[#e11d47a4] rounded-full px-[17px] py-[4px]">
                  Action
                </p>
                <p className="border-[1px] border-[#e11d47a4] rounded-full px-[17px] py-[4px]">
                  Drama
                </p>
              </div>
            </div>
            <div className="lg:flex items-center hidden">
              <button onClick={() => handleSaved(data.id)}>
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
                        data && savedItems.includes(data.id) ? "red" : "#F3F4F6"
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
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation={1}
                      />
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
              <p className="text-[18px] font-semibold ml-3">
                <span className="text-gray-400 text-[20px]">8.5</span> | 350k
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col-reverse items-center justify-between mt-5 ">
            <div className="lg:w-[65%] w-full">
              <p
                className="text-black text-[18px] mb-[15px]"
                data-testid="movie-overview"
              >
                {data && data.overview}
              </p>
              <div className="flex items-center mb-4">
                <p className="capitalize text-[16px] mr-3 font-semibold">
                  directors:
                </p>
                <span className="text-[15px] text-[#e11d48] font-semibold capitalize">
                  joseph kosinski
                </span>
              </div>
              <div className="flex items-center mb-4">
                <p className="capitalize text-[16px] mr-3 font-semibold">
                  writers:
                </p>
                <span className="text-[15px] text-[#e11d48] font-semibold capitalize">
                  jim cash, jack epp jnr, peter craig
                </span>
              </div>
              <div className="flex items-center mb-4">
                <p className="capitalize text-[16px] mr-3 font-semibold">
                  stars:
                </p>
                <span className="text-[15px] text-[#e11d48] font-semibold capitalize">
                  tom cruise, jennifer connelly, miles teller
                </span>
              </div>
              <div className="flex items-center  border-[1px] border-gray-300 rounded-lg w-full">
                <div className="flex items-center bg-[#e11d48] text-white py-2 px-[14px] rounded-lg">
                  <p className="md:text-[15px] text-[11px]">
                    Top rated movie <span className="font-semibold">#65</span>
                  </p>
                </div>
                <div className="flex items-center text-black py-2 px-[14px] rounded-r-lg md:text-[15px] text-[11px]">
                  <p className="capitalize font-semibold mr-2">awards</p>
                  <p className="capitalize font-semibold">9 nominations</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:w-[30%] w-full">
              <div className="flex items-center justify-center bg-[#e11d48] px-6 py-1.5 mb-[10px] rounded-lg w-full ">
                <img className="md:w-5 w-3 mr-1.5" src={twoTickets} alt="" />
                <p className="text-white capitalize font-semibold md:text-[15px] text-[11px]">
                  see showtimes
                </p>
              </div>
              <Link
                to="/"
                className="flex items-center justify-center bg-[#e11d471b] px-6 py-1.5 rounded-lg border-[1px] border-[#e11d48] w-full mb-2 hover:scale-110 ease-in duration-300"
              >
                <img className="md:w-5 w-3 mr-1.5" src={list} alt="" />
                <p className="text-black font-semibold md:text-[15px] text-[11px]">
                  More watch options
                </p>
              </Link>
              <div className="h-[100%] lg:grid hidden items-center grid-cols-3 gap-x-[3px] justify-center relative">
                <img
                  className="h-[13rem] rounded-l-lg mr-0.5"
                  src="https://image.tmdb.org/t/p/original/laCJxobHoPVaLQTKxc14Y2zV64J.jpg"
                  alt=""
                />
                <img
                  className="h-[13rem] mr-0.5"
                  src="https://image.tmdb.org/t/p/original/kdM24KINoAVK9wjCtDJCkdffEpc.jpg"
                  alt=""
                />
                <img
                  className="h-[13rem] rounded-r-lg"
                  src="https://image.tmdb.org/t/p/original/jqP43GHOt39b2YOr8yVlU6kuaep.jpg"
                  alt=""
                />
                <div className="flex items-center absolute -bottom-[10px] justify-center w-full bg-black bg-opacity-60 px-2 py-1.5 mb-[10px] rounded-lg ">
                  <img className="w-5 mr-1.5" src={listWhite} alt="" />
                  <p className="text-white capitalize font-semibold text-[10px]">
                    the best movies and shows in september
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-300 animate-spin"
            role="status"
          ></div>
          <span className="ml-2">searching . . .</span>
        </div>
      )}
    </>
  );
};

export default MovieDetail;

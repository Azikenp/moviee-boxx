import React from "react";
import favorite from "../assets/Favorite.svg";
import twoTickets from "../assets/Two-Tickets.svg";
import logoSvg from "../assets/Logo.svg";
import list from "../assets/List.svg";
import listWhite from "../assets/List-white.png";
import { Link } from "react-router-dom";

const MovieDetail = ({ data }) => {
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

  return (
    <div className="relative flex flex-col md:pt-9 pt-4 md:w-[70%] w-full px-4 md:px-0 md:pr-4 pb-3 lg:pb-0">
      <Link className="md:hidden items-center mb-[10px] px-4" to="/">
        <img className="w-[120px]" src={logoSvg} alt="logo" />
        <p className="text-black font-bold absolute left-[76px] top-5 text-[15px]">
          MovieBox
        </p>
      </Link>
      <img
        className="rounded-[20px] w-full h-[40%]"
        src={`https://image.tmdb.org/t/p/original${data && data.backdrop_path}`}
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
              {data && utcDateString}
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
          <div className="md:flex gap-x-3 hidden text-[13px] font-bold text-[#e11d48]">
            <p className="border-[1px] border-[#e11d47a4] rounded-full px-[17px] py-[4px]">
              Action
            </p>
            <p className="border-[1px] border-[#e11d47a4] rounded-full px-[17px] py-[4px]">
              Drama
            </p>
          </div>
        </div>
        <div className="lg:flex items-center hidden">
          <div className="cursor-pointer">
            <img src={favorite} alt="" />
          </div>
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
            <p className="capitalize text-[16px] mr-3 font-semibold">stars:</p>
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
  );
};

export default MovieDetail;

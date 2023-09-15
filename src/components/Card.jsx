import React from "react";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {

  return (
    <>
      <Link
        to={`/${movie.id}`}
        className="relative mb-7 w-[14rem] md:w-[13rem] lg:w-[14rem] hover:scale-110 ease-in duration-300"
      >
        <img
          className="w-full h-[20rem] rounded-t-sm"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="movie poster"
          data-testid="movie-poster"
        />
        <span className="text-[8px] text-gray-400 uppercase font-semibold">
          usa 2016 - current
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

        <div className="flex items-center justify-between w-full px-3 absolute top-3">
          <span className="p-2 py-0.5 bg-gray-500 bg-opacity-70 rounded-full font-semibold text-black text-[10px] uppercase">
            Tv series
          </span>
          <button>
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
                  fill="#F3F4F6"
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
      </Link>
    </>
  );
};

export default Card;

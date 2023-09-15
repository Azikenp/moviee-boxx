import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Context";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { searchResults, getSearchResults } = useContext(MovieContext);

  // console.log(searchResults);

  const handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    // getSearchResults(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchResults(searchText);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:relative md:w-[350px] lg:w-[500px] md:top-0 flex items-center border-2 border-gray-100 rounded p-[4px] text-gray-200 z-10 absolute w-[320px] top-[6rem]"
      >
        <input
          className="w-full bg-transparent outline-none pl-4"
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleInput}
          value={searchText}
        />
        <button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {searchResults.length > 0 ? (
          <ul className="flex items-center lg:justify-start md:justify-center flex-wrap gap-x-[4rem] absolute top-[5.3rem] left-0 w-full h-[465px] rounded overflow-x-hidden py-6 md:px-20 px-12 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-[#e11d47bf] scrollbar-track-gray-200 z-[1000]">
            {searchResults ? (
              searchResults.map((movie) => {
                console.log(movie);
                // Input date string in ISO format (YYYY-MM-DD)
                const inputDateStr = movie && movie.release_date;

                // Create a Date object using the input date string
                const localDate = new Date(inputDateStr);

                // Convert the local date to UTC by using UTC methods
                const utcYear = localDate.getUTCFullYear();
                const utcMonth = localDate.getUTCMonth();
                const utcDay = localDate.getUTCDate();

                // Create a new date object with the UTC components
                const utcDate = new Date(Date.UTC(utcYear, utcMonth, utcDay));

                // Format the UTC date as desired
                const utcDateString = utcDate.toDateString();

                return (
                  <Link
                    to={`/${movie.id}`}
                    className="mb-7 lg:w-[21rem] md:w-[17rem] hover:scale-110 ease-in duration-300"
                    key={movie.id}
                  >
                    <li className="flex items-center justify-between text-white border-[1px] bg-[#e11d4711] border-[#e11d47bf] rounded-lg px-3 py-2">
                      <div className="flex items-center">
                        <img
                          className="max-w-[100px] max-h-[70px] rounded-lg mr-2"
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt="movie poster"
                        />
                        <p className="font-bold text-[14px] text-black capitalize">
                          {movie.title}
                        </p>
                      </div>
                      <p className="font-bold text-[12px] text-black ml-2">
                        {movie.release_date === ""
                          ? "No date available"
                          : utcDateString}
                      </p>
                    </li>
                  </Link>
                );
              })
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-300 animate-spin"
                  role="status"
                ></div>
                <span className="ml-2">searching . . .</span>
              </div>
            )}
          </ul>
        ) : null}
      </form>
    </>
  );
};

export default Search;

import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import logoSvg from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link className="z-10" to="/">
        <img className="w-[150px]" src={logoSvg} alt="logo" />
      </Link>

      <Search />

      <button className="flex items-center z-10 hover:scale-110 ease-in duration-300">
        <p className="text-white mr-4 font-semibold text-[14px]">Sign In</p>
        <div className="flex items-center justify-center text-white font-bold bg-[#e11d48] w-9 h-9 rounded-[50%] text-[18px]">
          <span className="relative translate-y-[-5%]">=</span>
        </div>
      </button>
    </div>
  );
};

export default Navbar;

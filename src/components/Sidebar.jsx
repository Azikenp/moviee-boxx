import React from "react";
import logoSvg from "../assets/Logo.svg";
import home from "../assets/Home.svg";
import movieProjector from "../assets/Movie-Projector.svg";
import logout from "../assets/Logout.svg";
// import calender from "../assets/Calender.svg";
import tvSeries from "../assets/TV-Show.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:flex flex-col hidden mr-9 py-11 border border-gray-200 h-[100vh] w-[25vw] rounded-r-[50px]">
      <Link className="flex items-center mb-[40px] px-4" to="/">
        <img className="w-[150px]" src={logoSvg} alt="logo" />
        <p className="text-black font-bold absolute left-[70px]">MovieBox</p>
      </Link>
      <ul>
        <li className="flex items-center gap-3 py-6 px-6 cursor-pointer hover:bg-[#e11d471b]">
          <img src={home} alt="" />
          <p className="font-semibold capitalize">home</p>
        </li>
        <li className="flex items-center gap-3 py-6 px-6 cursor-pointer bg-[#e11d471b] border border-r-[4px] border-r-[#e11d48]">
          <img src={movieProjector} alt="" />
          <p className="text-[#e11d48] font-semibold capitalize">movies</p>
        </li>
        <li className="flex items-center gap-3 py-6 px-6 cursor-pointer hover:bg-[#e11d471b]">
          <img src={tvSeries} alt="" />
          <p className="font-semibold capitalize">tv series</p>
        </li>
        <li className="flex items-center gap-3 py-6 px-6 mb-5 cursor-pointer hover:bg-[#e11d471b]">
          <img src={tvSeries} alt="" />
          <p className="font-semibold capitalize">upcoming</p>
        </li>
      </ul>
      <div className="flex flex-col bg-[#e11d4725] px-3 py-8 w-[80%] self-center border-[1px] border-[#e11d47a4] rounded-[20px]">
        <p className="font-semibold">
          Play movie quotes and earn <br /> free tickets
        </p>
        <span className="text-[13px] text-gray-700">
          50k people are playing now
        </span>
        <button className="bg-[#e11d4745] mt-2 rounded-[30px] py-2">
          <p className="text-[#e11d48] font-bold text-[13px]">Start playing</p>
        </button>
      </div>

      <button className="flex items-center justify-center mt-6">
        <img src={logout} alt="logout" />
        <p>log out</p>
      </button>
    </div>
  );
};

export default Sidebar;

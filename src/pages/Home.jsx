import React from "react";
import Header from "../components/Header";
import { MovieProvider } from "../context/Context";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <MovieProvider>
      <main className="h-[100vh">
        <Header />

        <Outlet />
      </main>
    </MovieProvider>
  );
};

export default Home;

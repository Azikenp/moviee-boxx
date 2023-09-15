import React from "react";
import Trending from "./components/Trending"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";



function App() {

  return (
    <div>
      <Trending />
      {/* <MovieList /> */}
      <Footer />

      <Outlet />
    </div>
  )
}

export default App

import React from "react";
import "./Movies.css";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { movies } from "../../movies.js";

function Movies() {
  return (
    <div className="movies__container-wrapper h-screen">
      <div className="container h-screen dark:text-white !pb-[50px] ">
        <h1>Movies page</h1>
        <div className="movies-wrapper !grid grid-cols-5">
          {movies.map((item) => (
            <MoviesCard key={item.movieId} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;

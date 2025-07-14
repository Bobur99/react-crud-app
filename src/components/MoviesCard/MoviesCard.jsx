import React from "react";
import './MoviesCard.css'
import { useNavigate } from "react-router-dom";

function MoviesCard({movie}) {
  const navigate = useNavigate()

  const gotoDetail = () => {
    navigate(`/movies/detail/${movie.movieId}`)
  }


  return (
    <div className="movie-card w-[200px]">
      <div className="movie-img--wrapper">
        <img onClick={gotoDetail} src={movie.posterUrl} alt={movie.movieTitle} />
      </div>
      <h5>{movie.movieTitle}</h5>
    </div>
  );
}

export default MoviesCard;

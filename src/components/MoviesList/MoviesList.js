import React from "react";
import { withRouter } from "react-router-dom";
import MovieItem from "./MovieItem/MovieItem";
import style from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={style.moviesList}>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} title={movie.title} id={movie.id} />;
      })}
    </ul>
  );
};

export default withRouter(MoviesList);

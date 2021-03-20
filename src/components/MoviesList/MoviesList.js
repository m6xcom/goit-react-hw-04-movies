import React from "react";
import MovieItem from "./MovieItem/MovieItem";
import style from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  console.dir("movies");
  return (
    <ul>
      {movies.map((movie) => {
        console.log(movie);
        return <MovieItem key={movie.id} title={movie.title} id={movie.id} />;
      })}
    </ul>
  );
};

export default MoviesList;

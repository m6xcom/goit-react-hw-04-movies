import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";

const MovieItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieItem;

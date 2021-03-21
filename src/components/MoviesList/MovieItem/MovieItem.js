import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./MovieItem.module.css";

const MovieItem = ({ title, id, location }) => {
  return (
    <li>
      <Link
        className={style.link}
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default withRouter(MovieItem);

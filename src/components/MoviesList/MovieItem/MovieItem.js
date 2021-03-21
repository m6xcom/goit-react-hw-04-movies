import React from "react";
import { Link, withRouter } from "react-router-dom";
import routes from "../../../services/routes";
import style from "./MovieItem.module.css";

const MovieItem = ({ title, id, location }) => {
  return (
    <li>
      <Link
        className={style.link}
        to={{
          pathname: `${routes.moviesPage}/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default withRouter(MovieItem);

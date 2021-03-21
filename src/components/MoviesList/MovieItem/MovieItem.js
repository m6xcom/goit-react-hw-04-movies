import React from "react";
import PropTypes from "prop-types";
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

MovieItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  location: PropTypes.object,
};

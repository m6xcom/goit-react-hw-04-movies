import React from "react";
import PropTypes from "prop-types";
import style from "./Cast.module.css";

const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map((person) => (
        <li key={person.id}>
          {person.profile_path && (
            <img
              className={style.actor}
              src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
              alt={person.name}
            />
          )}
          <h3>{person.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};

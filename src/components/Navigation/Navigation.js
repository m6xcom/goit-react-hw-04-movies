import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={style.nav}>
        <li>
          <NavLink
            exact
            to="/"
            className={style.navLink}
            activeClassName={style.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies"
            className={style.navLink}
            activeClassName={style.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

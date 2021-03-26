import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../services/routes";
import AppBar from "../AppBar/AppBar";
import "./App.css";

const HomePage = lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const App = () => {
  return (
    <>
      <AppBar />
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.homePage} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.moviesPage} component={MoviesPage} />
            <Redirect to={routes.homePage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header>
          <Route component={Navigation} />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

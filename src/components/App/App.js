import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
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
        </Switch>
      </div>
    );
  }
}

export default App;

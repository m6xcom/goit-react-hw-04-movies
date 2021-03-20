import React, { Component } from "react";
import getTreningMovies from "../../services/movieRequest";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    getTreningMovies();
    return <div className="App"></div>;
  }
}

export default App;

import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import getTreningMovies from "../../services/movieRequest";
import style from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    getTreningMovies().then((movies) => this.setState({ movies: movies }));
  }
  render() {
    console.log(this.state.movies.length);
    return (
      <div>
        <h1>Trending today</h1>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default HomePage;

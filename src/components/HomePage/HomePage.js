import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import requests from "../../services/movieRequest";
import style from "./HomePage.module.css";

const { getTrendingMovies } = requests;

class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    getTrendingMovies().then((movies) => this.setState({ movies: movies }));
  }
  render() {
    return (
      <div>
        <h1 className={style.mainTitle}>Trending today</h1>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default HomePage;

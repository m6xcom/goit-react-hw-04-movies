import React, { Component } from "react";
import requests from "../../../services/movieRequest";
import MoviesList from "../../MoviesList/MoviesList";
import style from "./MoviesPage.module.css";

const { searchMovie } = requests;

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query) {
      searchMovie(this.state.query)
        .then((res) => this.setState({ movies: res }))
        .then(() => {
          e.target.reset();
          this.props.history.push({
            search: `query=${this.state.query}`,
          });
        });
    }
  };
  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ query: e.target.value });
    }
  };
  componentDidMount() {
    if (this.props.history.location.search) {
      let params = new URLSearchParams(
        this.props.history.location.search.substring(1)
      );
      let query = params.get("query");
      searchMovie(query).then((res) => this.setState({ movies: res }));
    }
  }
  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <input
            className={style.inputField}
            onChange={this.handleChange}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default MoviesPage;

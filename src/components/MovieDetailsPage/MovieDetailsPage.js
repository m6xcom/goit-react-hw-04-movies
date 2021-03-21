import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import requests from "../../services/movieRequest";
import routes from "../../services/routes";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import style from "./MovieDetailsPage.module.css";

const { getMovieDetails, getMovieCast, getMovieReviews } = requests;

class MovieDetailsPage extends Component {
  state = {
    img: "",
    title: "",
    year: "",
    userScore: "",
    overView: "",
    genres: [],
    cast: [],
    reviews: [],
  };
  componentDidMount() {
    getMovieDetails(this.props.match.params.movieId).then((details) => {
      const releaseDate = new Date(details.release_date);
      return this.setState({
        img: `https://image.tmdb.org/t/p/w300/${details.poster_path}`,
        title: details.original_title,
        year: releaseDate.getFullYear(),
        userScore: Math.round(details.vote_average * 10),
        overView: details.overview,
        genres: details.genres,
      });
    });
    getMovieCast(this.props.match.params.movieId).then((cast) => {
      this.setState({
        cast: cast,
      });
    });
    getMovieReviews(this.props.match.params.movieId).then((reviews) => {
      this.setState({ reviews: reviews });
    });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.replace(location.state.from);
    }
    return history.push("/");
  };
  render() {
    return (
      <div>
        <div className={style.detailsContainer}>
          <div>
            <button onClick={this.handleGoBack}>&larr; Go back</button>
            <img src={this.state.img} alt="Movie poster" />
          </div>
          <div className={style.details}>
            <h1 className={style.movieTitle}>
              {this.state.title} {this.state.year && `(${this.state.year})`}
            </h1>
            <span
              className={style.movieTitle}
            >{`User score: ${this.state.userScore}%`}</span>
            <div>
              <h2>Overview</h2>
              <p>{this.state.overView}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <ul className={style.genresList}>
                {this.state.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.additionalInfo}>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${routes.moviesPage}/${this.props.match.params.movieId}/cast`,
                  state: {
                    from:
                      this.props.location.state &&
                      this.props.location.state.from &&
                      this.props.location.state.from,
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${routes.moviesPage}/${this.props.match.params.movieId}/reviews`,
                  state: {
                    from:
                      this.props.location.state &&
                      this.props.location.state.from &&
                      this.props.location.state.from,
                  },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Switch>
            {this.state.cast.length > 0 && (
              <Route
                exact
                path={`${this.props.match.url}/cast`}
                render={() => <Cast cast={this.state.cast} />}
              />
            )}
            {this.state.reviews.length > 0 ? (
              <Route
                exact
                path={`${this.props.match.url}/reviews`}
                render={() => <Reviews reviews={this.state.reviews} />}
              />
            ) : (
              <Route
                exact
                path={`${this.props.match.url}/reviews`}
                render={() => <h3>We don't have any reviews for this movie</h3>}
              />
            )}
          </Switch>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;

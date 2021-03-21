import axios from "axios";

const key = "54446aa39ef6f8361f9f28a334ac1cc9";
const url = "https://api.themoviedb.org/3";

const requests = {
  async getTrendingMovies() {
    try {
      const response = await axios.get(
        `${url}/trending/movie/day?api_key=${key}`
      );
      const data = await response.data;
      const moviesList = await data.results;
      return moviesList;
    } catch (error) {
      console.log(error);
    }
  },

  async searchMovie(query) {
    try {
      const response = await axios.get(
        `${url}/search/movie?api_key=${key}&query=${query}&language=en-US&page=1`
      );
      const data = await response.data;
      const movies = await data.results;
      return movies;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const response = await axios.get(
        `${url}/movie/${id}?api_key=${key}&language=en-US`
      );
      const movieDetails = await response.data;
      return movieDetails;
    } catch (error) {
      console.log(error);
    }
  },
  async getMovieCast(id) {
    try {
      const response = await axios.get(
        `${url}/movie/${id}/credits?api_key=${key}&language=en-US`
      );
      const data = await response.data;
      const movieCast = await data.cast;
      return movieCast;
    } catch (error) {
      console.log(error);
    }
  },
  async getMovieReviews(id) {
    try {
      const response = await axios.get(
        `${url}/movie/${id}/reviews?api_key=${key}&language=en-US`
      );
      const data = await response.data;
      const movieReviews = await data.results;
      return movieReviews;
    } catch (error) {
      console.log(error);
    }
  },
};

export default requests;

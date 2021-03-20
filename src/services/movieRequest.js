import axios from "axios";

const key = "54446aa39ef6f8361f9f28a334ac1cc9";
const url = "https://api.themoviedb.org/3";

async function getTreningMovies() {
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
}

export default getTreningMovies;

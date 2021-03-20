import axios from "axios";

const key = "54446aa39ef6f8361f9f28a334ac1cc9";

async function getTreningMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    );
    console.dir(response);
  } catch (error) {
    console.log(error);
  }
}

export default getTreningMovies;

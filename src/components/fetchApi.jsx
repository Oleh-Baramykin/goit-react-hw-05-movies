import axios from 'axios';

const API_KEY = '696f021ebda6320be06225d8f2848108';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendsMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const detailInfoMovie = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const detailInfoMovie = async movieId => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//     );
//     return response.data;
//   } catch (error) {
//     Notify.failure('Oops...Try again');
//     console.log(error);
//   }
// };

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      console.log('There is no movies');
    }
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      console.log('There is no cast');
    }
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReview = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      console.log('There is no review');
    }
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

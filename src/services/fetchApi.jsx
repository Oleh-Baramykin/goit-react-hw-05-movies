import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '696f021ebda6320be06225d8f2848108';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendsMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    Notify.failure('Oops...Try again');
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
    Notify.failure('Try again');
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      Notify.warning('There are no such movies');
    }
    return response.data.results;
  } catch (error) {
    Notify.failure('Try again');
    console.log(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      Notify.warning('There are no casts');
    }
    return response.data.cast;
  } catch (error) {
    Notify.failure('Try again');
    console.log(error);
  }
};

export const getMovieReview = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      Notify.warning('There are no reviews');
    }
    return response.data.results;
  } catch (error) {
    Notify.failure('Try again');
    console.log(error);
  }
};

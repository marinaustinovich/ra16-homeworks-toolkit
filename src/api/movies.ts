import axios from 'axios';
import { MovieDetails, MoviesResponse } from '../store';

const API_URL = process.env.REACT_APP_GET_FILMS_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovies = async (searchTerm: string): Promise<MoviesResponse> => {
  const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}`);
  if (response.data.Response === "True") {
    return response.data;
  } else {
    throw new Error(response.data.Error || "Unknown error occurred");
  }
};

export const getMovieById = async (movieId: string) => {
  const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${movieId}`);
  return response.data as MovieDetails;
  };
  

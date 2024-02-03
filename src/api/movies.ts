import axios from "axios";
import { ErrorResponse, MovieDetails, MoviesResponse } from "../store";

const API_URL = import.meta.env.VITE_GET_MOVIES_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (
  searchTerm: string
): Promise<MoviesResponse  | ErrorResponse> => {
  const response = await axios.get(
    `${API_URL}?apikey=${API_KEY}&s=${searchTerm}`
  );

  return response.data;
};

export const getMovieById = async (
  movieId: string
): Promise<MovieDetails | ErrorResponse> => {
  const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${movieId}`);

  return response.data;
};

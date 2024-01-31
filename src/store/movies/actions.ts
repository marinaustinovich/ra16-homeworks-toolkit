import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById, searchMovies } from "../../api";
import { AxiosError } from "axios";
import { addFetchedMovies, addSelectedMovie, addTotalResult } from "./slice";

export const fetchMovies = createAsyncThunk(
  "movies/fetchFavoriteMovies",
  async (searchTerm: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await searchMovies(searchTerm);
      dispatch(addFetchedMovies(response.Search));
      dispatch(addTotalResult(response.totalResults));

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data || "An error occurred while fetching the movies"
        );
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
    "movies/fetchMovieDetails",
    async (movieId: string, { rejectWithValue, dispatch }) => {
      try {
        const response = await getMovieById(movieId);
        dispatch(addSelectedMovie(response));

        return response;
      } catch (error) {
        if (error instanceof AxiosError) {
          return rejectWithValue(
            error.response?.data || "An error occurred while fetching the movie details"
          );
        }
        return rejectWithValue("An unknown error occurred");
      }
    }
  );
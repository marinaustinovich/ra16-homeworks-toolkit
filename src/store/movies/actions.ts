import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById, searchMovies } from "../../api";
import { AxiosError } from "axios";
import {
  addFetchedMovies,
  addSelectedMovie,
  addTotalResult,
  setFetchError,
  setIsLoading,
} from "./slice";
import { ErrorResponse, MovieDetails } from "./types";

export const fetchMovies = createAsyncThunk(
  "movies/fetchFavoriteMovies",
  async (searchTerm: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setIsLoading(true));

      const response = await searchMovies(searchTerm);
      if (response.Response === "True") {
        dispatch(setFetchError(null));
        dispatch(addFetchedMovies(response.Search));
        dispatch(addTotalResult(response.totalResults));

        return response;
      } else {
        dispatch(setFetchError(response as ErrorResponse));
        return rejectWithValue(response as ErrorResponse);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data || "An error occurred while fetching the movies"
        );
      }
      return rejectWithValue("An unknown error occurred");
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setIsLoading(true));

      const response = await getMovieById(movieId);

      if (response.Response === "True") {
        dispatch(setFetchError(null));
        dispatch(addSelectedMovie(response as MovieDetails));

        return response;
      } else {
        dispatch(setFetchError(response as ErrorResponse));
        return rejectWithValue(response as ErrorResponse);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data ||
            "An error occurred while fetching the movie details"
        );
      }
      return rejectWithValue("An unknown error occurred");
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorResponse, Movie, MovieDetails, MoviesState } from "./types";

export const initialState: MoviesState = {
  movies: null,
  favorites: [],
  totalResults: "",
  selectedMovie: null,
  filter: "",
  errorResponse: null,
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFetchedMovies: (state, action: PayloadAction<Movie[] | null>) => {
      state.movies = action.payload;
    },
    addTotalResult: (state, action: PayloadAction<string>) => {
      state.totalResults = action.payload;
    },
    addSelectedMovie: (state, action: PayloadAction<MovieDetails>) => {
      state.selectedMovie = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setFetchError: (state, action: PayloadAction<ErrorResponse | null>) => {
      state.errorResponse = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addFetchedMovies,
  addFavorite,
  removeFavorite,
  addTotalResult,
  addSelectedMovie,
  setFilter,
  setFetchError,
  setIsLoading,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

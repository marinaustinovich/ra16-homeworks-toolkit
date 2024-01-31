import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieDetails, MoviesState } from "./types";

export const initialState: MoviesState = {
  movies: [],
  favorites: [],
  totalResults: "",
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFetchedMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    addTotalResult: (state, action: PayloadAction<string>) => {
      state.totalResults = action.payload;
    },
    addSelectedMovie: (state, action: PayloadAction<MovieDetails>) => {
      state.selectedMovie = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addFetchedMovies, addFavorite, removeFavorite, addTotalResult, addSelectedMovie } =
  moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

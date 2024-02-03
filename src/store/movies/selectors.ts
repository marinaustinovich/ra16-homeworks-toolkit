import { RootState } from "../../store/index.ts";

export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;


export const getSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const getSearchMovies = (state: RootState) => state.movies.movies;
export const getFilter = (state: RootState) => state.movies.filter;
export const getFavorites = (state: RootState) => state.movies.favorites;
export const getErrorResponse = (state: RootState) => state.movies.errorResponse;
export const getIsLoading = (state: RootState) => state.movies.isLoading;

export const makeIsMovieFavoriteSelector = (state: RootState) => (imdbID: string) => {
    return state.movies.favorites.some(movie => movie.imdbID === imdbID);
  };
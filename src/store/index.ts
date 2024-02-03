import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies/slice";
import { MoviesState } from "./movies";

export * from "./movies";

export interface RootState {
  movies: MoviesState;
}

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
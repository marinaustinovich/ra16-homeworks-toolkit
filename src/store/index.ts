import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies/slice";
import { MoviesState } from "./movies";

export * from "./movies";

export interface RootState {
  films: MoviesState;
}

const store = configureStore({
  reducer: {
    films: moviesReducer,
  },
});

export default store;

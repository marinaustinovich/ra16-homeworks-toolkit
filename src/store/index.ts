import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./slice";
import { FilmsState } from "./types";

export interface RootState {
  films: FilmsState;
}

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;

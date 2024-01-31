import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film, FilmsState } from "./types";

export const initialState: FilmsState = {
  films: [],
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    addFetchedFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = action.payload;
    },
  },
});

export const { addFetchedFilms } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;

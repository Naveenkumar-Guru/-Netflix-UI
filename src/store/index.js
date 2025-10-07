import { configureStore, createSlice } from "@reduxjs/toolkit";

// ✅ Corrected spelling: should be `initialState`, not `instialstate`
const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {}, // you can add actions here later
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});

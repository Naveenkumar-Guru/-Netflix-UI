import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/Constant";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  // console.log(genres); api console
  return genres;
});

export const arrayOfMovieData = (array, moviesArray, generes) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = generes.find(({ id }) => id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        Image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 2),
      });
  });
};

//only 80 movies

const getMoviesData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&pages=${i}` : ""}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    const data = await getMoviesData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
    console.log(data);
  }
);

const netflixSlice = createSlice({
  name: "Netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});

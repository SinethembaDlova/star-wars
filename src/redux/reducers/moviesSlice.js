import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    isLoading: false,
  },
  reducers: {
    fetchMoviesBegin(state) {
      state.isLoading = true;
    },
    fetchMoviesSuccess(state, action) {
      state.movies = action.payload;
      state.isLoading = false;
    },
    fetchMoviesFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export default moviesSlice.reducer;

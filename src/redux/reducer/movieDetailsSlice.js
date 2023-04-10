import { createSlice } from '@reduxjs/toolkit';

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    movieDetails: {},
    isLoading: false,
  },
  reducers: {
    fetchMovieDetailsBegin(state) {
      state.isLoading = true;
    },
    fetchMovieDetailsSuccess(state, action) {
      state.movieDetails = action.payload;
      state.isLoading = false;
    },
    fetchMovieDetailsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { fetchMovieDetailsBegin, fetchMovieDetailsSuccess, fetchMovieDetailsFailure } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;

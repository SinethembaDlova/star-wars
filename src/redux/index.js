import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducer/moviesSlice';
import movieDetailsReducer from './reducer/movieDetailsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default store;

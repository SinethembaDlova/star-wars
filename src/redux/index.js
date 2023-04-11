import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import movieDetailsReducer from './reducers/movieDetailsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default store;

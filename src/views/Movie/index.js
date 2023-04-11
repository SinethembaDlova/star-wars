import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../globalStyles';
import MovieDetails from 'components/MovieDetails';
import Loader from 'components/Loader';
import fetchMovieDetails from 'api/fetchMovieDetails';
import {
  fetchMovieDetailsBegin,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} from '../../redux/reducers/movieDetailsSlice';

const Movie = () => {
  const dispatch = useDispatch();
  const { movieDetails, isLoading } = useSelector((state) => state.movieDetails);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      dispatch(fetchMovieDetailsBegin());
      try {
        const singlemovie = await fetchMovieDetails(id);
        dispatch(fetchMovieDetailsSuccess(singlemovie));
      } catch (error) {
        console.error(error);
        dispatch(fetchMovieDetailsFailure());
      }
    })();
  }, [dispatch, id]);

  return <Container>{isLoading ? <Loader /> : <MovieDetails details={movieDetails} />} </Container>;
};

export default Movie;

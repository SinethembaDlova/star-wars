import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading, Row } from '../../globalStyles';
import Loader from 'components/Loader';
import fetchAllMovies from 'api/fetchAllMovies';
import {
  fetchMoviesBegin,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../../redux/reducers/moviesSlice';
import MovieCard from 'components/MovieCard';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => state.movies);

  useEffect(() => {
    (async () => {
      dispatch(fetchMoviesBegin());
      try {
        const allMovies = await fetchAllMovies();
        dispatch(fetchMoviesSuccess(allMovies));
      } catch (error) {
        console.error(error);
        dispatch(fetchMoviesFailure());
      }
    })();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>Movies</Heading>
          <Row wrap="wrap" justify="space-between">
            {movies.length > 0 &&
              movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Movies;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading, Row } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Loader from 'components/Loader';
import fetchAllMovies from 'api/fetchAllMovies';
import {
  fetchMoviesBegin,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../../redux/reducer/moviesSlice';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => state.movies);

  const moviesData = (movies) =>
    movies.map((movie) => ({
      title: movie.title,
      director: movie.director,
      producer: movie.producer,
      release_date: movie.release_date,
      actions: <Link to={`/movies/${movie.id}`}>View Movie Details</Link>,
    }));

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
          <Row justify="center">
            {movies.length > 0 && (
              <Table
                columnNames={['Title', 'Director', 'Producer', 'Release Date', 'Actions']}
                data={moviesData(movies)}
              />
            )}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Movies;

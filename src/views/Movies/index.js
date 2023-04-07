import React, { useContext } from 'react';
import { Container, Heading } from '../../globalStyles';
import { MoviesContext } from 'context/movies';
import { Link } from 'react-router-dom';

const Movies = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  const MoviesData = (movies) =>
    movies.map((movie, index) => ({
      index: index + 1,
      title: movie.title,
      director: movie.director,
      producer: movie.producer,
      release_date: movie.release_date,
      actions: <Link to={`/movies/${movie.title}`}>View Movie Details</Link>,
    }));

  if (isLoading) console.log('LOADING!!!');

  return (
    <Container>
      <Heading>Movies</Heading>
    </Container>
  );
};

export default Movies;

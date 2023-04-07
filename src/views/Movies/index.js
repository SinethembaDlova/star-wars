import React, { useContext } from 'react';
import { Container, Heading } from '../../globalStyles';
import { MoviesContext } from 'context/movies';

const Movies = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  if (isLoading) console.log('LOADING!!!');

  return (
    <Container>
      <Heading>Movies</Heading>
    </Container>
  );
};

export default Movies;

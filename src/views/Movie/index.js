import React, { useContext } from 'react';
import { Container, Heading } from '../../globalStyles';
import { MoviesContext } from 'context/movies';

const Movie = () => {
  const { isLoading } = useContext(MoviesContext);

  if (isLoading) console.log('LOADING!!!');

  return (
    <Container>
      <Heading>Hello Movie</Heading>
    </Container>
  );
};

export default Movie;

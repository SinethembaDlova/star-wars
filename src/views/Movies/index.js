import React, { useEffect } from 'react';
import { Container, Heading } from '../../globalStyles';
import fetchAllMovies from '../../api/fetchAllMovies';

const Movies = () => {
  useEffect(() => {
    (async () => {
      const data = await fetchAllMovies();
      console.log('data', data);
    })();
  }, []);
  return (
    <Container>
      <Heading>Movies</Heading>
    </Container>
  );
};

export default Movies;

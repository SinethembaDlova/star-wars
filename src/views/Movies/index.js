import React, { useContext } from 'react';
import { Container, Heading, Row } from '../../globalStyles';
import { MoviesContext } from 'context/movies';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';

const Movies = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  const moviesData = (movies) =>
    movies.map((movie) => ({
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
      <Row justify="center">
        {movies.length > 0 && (
          <Table
            columnNames={['Title', 'Director', 'Producer', 'Release Date', 'Actions']}
            data={moviesData(movies)}
          />
        )}
      </Row>
    </Container>
  );
};

export default Movies;

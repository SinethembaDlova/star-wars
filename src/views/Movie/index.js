import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { MoviesContext } from 'context/movies';
import MovieDetails from 'components/MovieDetails';

const Movie = () => {
  const { getMovieDetails, isLoading } = useContext(MoviesContext);
  const id = useParams().id;
  const [movieDetails, setMovieDetails] = useState({
    title: '',
  });

  if (isLoading) console.log('LOADING!!!');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const movie = await getMovieDetails(id);
          setMovieDetails({
            title: movie.title,
          });
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container>
      <MovieDetails details={movieDetails} />
    </Container>
  );
};

export default Movie;

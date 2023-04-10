import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { MoviesContext } from 'context/movies';
import MovieDetails from 'components/MovieDetails';
import Loader from 'components/Loader';

const Movie = () => {
  const { getMovieDetails, isLoading } = useContext(MoviesContext);
  const id = useParams().id;
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    opening_crawl: '',
    director: '',
    producer: '',
    created: '',
    edited: '',
    release_date: '',
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const movie = await getMovieDetails(id);
          setMovieDetails({
            ...movieDetails,
            title: movie?.title,
            opening_crawl: movie?.opening_crawl,
            director: movie?.director,
            producer: movie?.producer,
            created: movie?.created,
            edited: movie?.edited,
            release_date: movie?.release_date,
            planets: movie?.planets,
            species: movie?.species,
            vehicles: movie?.vehicles,
            starships: movie?.starships,
            characters: movie?.characters,
          });
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <MovieDetails details={movieDetails} />
    </Container>
  );
};

export default Movie;

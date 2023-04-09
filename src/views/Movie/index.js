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
    opening_crawl: '',
    director: '',
    producer: '',
    created: '',
    release_date: '',
    characters: ['Siyanda Josi', 'Papasi Pope', 'Ayanda Mazi', 'Sondeza Joke'],
    planets: ['Earth', 'Mars', 'Space'],
    species: ['Fish', 'Dope Shit', 'Shark'],
    starships: ['Erazone', 'Popacsfa', 'Zodiac'],
    vehicles: ['Mazarati', 'Tesla', 'Benz', 'Ferari'],
  });

  if (isLoading) console.log('LOADING!!!');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
          const movie = await getMovieDetails(id);
          setMovieDetails({
            ...movieDetails,
            title: movie.title,
            opening_crawl: movie.opening_crawl,
            director: movie.director,
            producer: movie.producer,
            created: movie.created,
            release_date: movie.release_date,
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

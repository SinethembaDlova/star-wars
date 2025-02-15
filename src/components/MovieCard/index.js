import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardWrapper,
  CardImageOverlay,
  CardHeader,
  CardTitle,
  CardProducer,
  CardDescription,
  StyledLink,
  CardButton
} from './index.style';
import movieCoverOne from '../../assets/images/movie_cover_1.png';
import movieCoverTwo from '../../assets/images/movie_cover_2.png';
import movieCoverThree from '../../assets/images/movie_cover_3.png';
import movieCoverFour from '../../assets/images/movie_cover_4.png';
import movieCoverFive from '../../assets/images/movie_cover_5.png';
import movieCoverSix from '../../assets/images/movie_cover_6.png';


const MovieCard = ({ movie }) => {
  const { title, opening_crawl, producer } = movie;

  const movieBackgrounds = {
    'A New Hope': movieCoverOne,
    'The Empire Strikes Back': movieCoverTwo,
    'Return of the Jedi': movieCoverThree,
    'The Phantom Menace': movieCoverFour,
    'Attack of the Clones': movieCoverFive,
    'Revenge of the Sith': movieCoverSix,
  };
  const fallBack = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h1vAAAAABJRU5ErkJggg=='; // Fallback image


  return (
    <CardContainer>
      <CardWrapper backgroundImage={movieBackgrounds[title] || fallBack}>
        <CardImageOverlay>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardProducer>By: {producer}</CardProducer>
          </CardHeader>
          <CardDescription>{opening_crawl}</CardDescription>
          <StyledLink to={`/movies/${movie.id}`}>
            <CardButton>View Movie</CardButton>
          </StyledLink>
        </CardImageOverlay>
      </CardWrapper>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    opening_crawl: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardImageOverlay,
  CardImage,
  CardTitle,
  CardDate,
  CardDescription,
  CardButton,
  CardContainer,
} from './index.style';

const MovieCard = ({ movie }) => {
  const { title, opening_crawl, release_date, producer } = movie;
  console.log(release_date);
  const imgUrl =
    'https://images.unsplash.com/photo-1526818614391-390bc085968b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

  return (
    <CardContainer>
      <CardWrapper>
        <CardImageOverlay>
          <CardTitle>{title}</CardTitle>
          <CardDate>{producer}</CardDate>
          <CardDescription>{opening_crawl}</CardDescription>
        </CardImageOverlay>
        <CardImage src={imgUrl} alt="Movie Poster" />
      </CardWrapper>
      <CardButton>View Movie</CardButton>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;

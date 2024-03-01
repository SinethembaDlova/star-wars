import React from 'react';
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

const MovieCard = () => {
  const imgUrl =
    'https://images.unsplash.com/photo-1526818614391-390bc085968b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

  return (
    <CardContainer>
      <CardWrapper>
        <CardImageOverlay>
          <CardTitle>The Night Of The Darkness</CardTitle>
          <CardDate>Date: January 1, 2023</CardDate>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut nulla arcu. Vestibulum
            in varius massa.
          </CardDescription>
        </CardImageOverlay>
        <CardImage src={imgUrl} alt="Movie Poster" />
      </CardWrapper>
      <CardButton>View Movie</CardButton>
    </CardContainer>
  );
};

export default MovieCard;

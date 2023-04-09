import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieDetailsContainer,
  HeadingContainer,
  BackIcon,
  Title,
  Description,
  Team,
  Label,
  ListWrapper,
} from './index.style';
import List from '../List';

const MovieDetails = ({ details }) => {
  const {
    title,
    opening_crawl,
    director,
    producer,
    created,
    release_date,
    characters,
    planets,
    species,
    starships,
    vehicles,
  } = details;

  return (
    <MovieDetailsContainer>
      <HeadingContainer>
        <BackIcon to="/movies">
          <i className="material-icons">arrow_back_ios</i>
          <span>Back</span>
        </BackIcon>
      </HeadingContainer>
      <Title>{title}</Title>
      <Team>Director by: {director}</Team>
      <Team>Producer by: {producer}</Team>
      <Description>{opening_crawl}</Description>
      <div>
        <Label>Created: </Label>
        <span>{created}</span>
      </div>
      <div>
        <Label>Release date: </Label>
        <span>{release_date}</span>
      </div>
      <ListWrapper>
        <List heading="Planets" listData={planets} />
        <List heading="Species" listData={species} />
        <List heading="Vehicles" listData={vehicles} />
        <List heading="Starships" listData={starships} />
        <List heading="Characters" listData={characters} />
      </ListWrapper>
    </MovieDetailsContainer>
  );
};

const moviePropTypes = {
  title: PropTypes.string.isRequired,
  opening_crawl: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
  species: PropTypes.arrayOf(PropTypes.string).isRequired,
  starships: PropTypes.arrayOf(PropTypes.string).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieDetails.propTypes = {
  details: PropTypes.shape(moviePropTypes).isRequired,
};

export default MovieDetails;

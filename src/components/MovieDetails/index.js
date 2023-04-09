import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieDetailsContainer,
  // Back,
  Title,
  Description,
  Label,
  ListWrapper,
} from './index.style';
import List from '../List';
{
  /* <Back>
  <i className="material-icons">arrow_back_ios</i>
  <span>
    <Heading>{title}</Heading>
  </span>
</Back> */
}

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
      <Title>{title}</Title>
      <Description>{opening_crawl}</Description>
      <div>
        <Label>Director: </Label>
        <span>{director}</span>
      </div>
      <div>
        <Label>Producer: </Label>
        <span>{producer}</span>
      </div>
      <div>
        <Label>Created: </Label>
        <span>{created}</span>
      </div>
      <div>
        <Label>Release date: </Label>
        <span>{release_date}</span>
      </div>
      <ListWrapper>
        <List heading="Characters" listData={characters} />
        <List heading="Planets" listData={planets} />
        <List heading="Species" listData={species} />
        <List heading="Starships" listData={starships} />
        <List heading="Vehicles" listData={vehicles} />
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

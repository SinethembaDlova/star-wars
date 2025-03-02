import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieDetailsContainer,
  BackContainer,
  BackIcon,
  Title,
  Description,
  Team,
  ListWrapper,
  DateContainer,
  DateItem,
  Label,
  Value,
} from './index.style';
import { Row } from 'globalStyles';
import { Col } from 'globalStyles';
import Accordion from 'components/Accordion';
import { replaceLastComma } from '../../utils/stringManipulation';

const MovieDetails = ({ details }) => {
  const {
    title,
    opening_crawl,
    director,
    producer,
    created,
    edited,
    release_date,
    characters,
    planets,
    species,
    starships,
    vehicles,
  } = details;

  return (
    <MovieDetailsContainer aria-label="movie-details">
      <BackContainer>
        <BackIcon to="/movies" aria-label="back-to-movies">
          <i className="material-icons">arrow_back_ios</i>
          <span>Back</span>
        </BackIcon>
      </BackContainer>
      <Row justify="center">
        <Col width="70%" mr="20px" aria-label="movie-info">
          <Title>{title}</Title>
          <Team>Director by: {replaceLastComma(director)}</Team>
          <Team>Producer by: {replaceLastComma(producer)}</Team>
          <Description>{opening_crawl}</Description>
          <DateContainer aria-label="movie-dates">
            <DateItem width="50%">
              <Label>Created: </Label>
              <Value>{created}</Value>
            </DateItem>
            <DateItem width="50%">
              <Label>Edited: </Label>
              <Value>{edited}</Value>
            </DateItem>
            <DateItem width="50%">
              <Label>Release date: </Label>
              <Value>{release_date}</Value>
            </DateItem>
          </DateContainer>
        </Col>
        <Col width="30%" background="#ffffff" padding="20px" aria-label="related-info">
          <ListWrapper>
            <Accordion heading="Characters" content={characters} aria-label="characters-list" />
            <Accordion heading="Species" content={species} aria-label="species-list" />
            <Accordion heading="Vehicles" content={vehicles} aria-label="vehicles-list" />
            <Accordion heading="Starships" content={starships} aria-label="starships-list" />
            <Accordion heading="Planets" content={planets} aria-label="planets-list" />
          </ListWrapper>
        </Col>
      </Row>
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

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
    <MovieDetailsContainer>
      <BackContainer>
        <BackIcon to="/movies">
          <i className="material-icons">arrow_back_ios</i>
          <span>Back</span>
        </BackIcon>
      </BackContainer>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row justify="center">
        <Col width="70%">
          <Team>Director by: {director}</Team>
          <Team>Producer by: {producer}</Team>
          <Description>{opening_crawl}</Description>
          <DateContainer>
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
        <Col width="30%" background="#ffffff" padding="20px">
          <ListWrapper>
            <Accordion heading="Characters" content={characters} />
            <Accordion heading="Species" content={species} />
            <Accordion heading="Vehicles" content={vehicles} />
            <Accordion heading="Starships" content={starships} />
            <Accordion heading="Planets" content={planets} />
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

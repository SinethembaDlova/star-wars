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
  FooterContainer,
  FooterItem,
  Label,
  Value,
} from './index.style';
import List from '../List';
import { Row } from 'globalStyles';
import { Col } from 'globalStyles';

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
      <BackContainer>
        <BackIcon to="/movies">
          <i className="material-icons">arrow_back_ios</i>
          <span>Back</span>
        </BackIcon>
      </BackContainer>
      <Row justify="center">
        <Col width="70%">
          <Title>{title}</Title>
          <Team>Director by: {director}</Team>
          <Team>Producer by: {producer}</Team>
          <Description>{opening_crawl}</Description>
          <FooterContainer>
            <FooterItem width="50%">
              <Label>Created: </Label>
              <Value>{created}</Value>
            </FooterItem>
            <FooterItem width="50%">
              <Label>Release date: </Label>
              <Value>{release_date}</Value>
            </FooterItem>
          </FooterContainer>
        </Col>
        <Col width="30%">
          <ListWrapper>
            <List heading="Planets" listData={planets} />
            <List heading="Species" listData={species} />
            <List heading="Vehicles" listData={vehicles} />
            <List heading="Starships" listData={starships} />
            <List heading="Characters" listData={characters} />
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

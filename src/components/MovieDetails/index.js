import React from 'react';
import PropTypes from 'prop-types';
import { MovieDetailsContainer, Back } from './index.style';
import { Heading } from '../../globalStyles';

const MovieDetails = ({ details }) => {
  // const navigate = useNavigate();

  return (
    <MovieDetailsContainer>
      <Back>
        <i className="material-icons">arrow_back_ios</i>
        <span>
          <Heading>{details.title}</Heading>
        </span>
      </Back>
    </MovieDetailsContainer>
  );
};

MovieDetails.propTypes = {
  details: PropTypes.obj,
};

export default MovieDetails;

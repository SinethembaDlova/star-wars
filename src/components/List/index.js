import React from 'react';
import PropTypes from 'prop-types';
import { ListColumn, ListHeading, List, ListItem } from './index.style';

const MovieDetails = ({ heading, listData }) => {
  return (
    <ListColumn>
      <ListHeading>{heading}</ListHeading>
      <List>
        {listData.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </ListColumn>
  );
};

MovieDetails.propTypes = {
  heading: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired,
};

export default MovieDetails;

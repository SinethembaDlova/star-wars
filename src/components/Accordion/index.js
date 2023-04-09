import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
  List,
  ListItem,
} from './index.style';

const Accordion = ({ heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <strong>{heading}</strong>
        {isExpanded ? ' -' : ' +'}
      </AccordionHeader>
      {isExpanded && (
        <AccordionContent>
          <List>
            {content.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};
Accordion.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default Accordion;

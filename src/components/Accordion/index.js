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

  const accordionId = `accordion-${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = `content-${heading.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <AccordionContainer>
      <AccordionHeader
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        id={accordionId}
        role="button"
        aria-label={`${heading} accordion ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <span>{heading}</span>
        <i aria-hidden="true">{isExpanded ? 'expand_less' : 'expand_more'}</i>
      </AccordionHeader>

      {isExpanded && content && (
        <AccordionContent id={contentId} aria-labelledby={accordionId} role="region">
          <List>
            {content?.length > 0 ? (
              content.map((item, index) => <ListItem key={index}>{item}</ListItem>)
            ) : (
              <ListItem>List Is Empty</ListItem>
            )}
          </List>
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Accordion;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './index';

/* eslint-disable react/prop-types */
// Mock the styled components
jest.mock('./index.style', () => {
  return {
    AccordionContainer: function AccordionContainer(props) {
      return <div data-testid="accordion-container">{props.children}</div>;
    },
    AccordionHeader: function AccordionHeader(props) {
      return (
        <div data-testid="accordion-header" {...props}>
          {props.children}
        </div>
      );
    },
    AccordionContent: function AccordionContent(props) {
      return (
        <div data-testid="accordion-content" {...props}>
          {props.children}
        </div>
      );
    },
    List: function List(props) {
      return <ul data-testid="accordion-list">{props.children}</ul>;
    },
    ListItem: function ListItem(props) {
      return <li data-testid="accordion-list-item">{props.children}</li>;
    },
  };
});
/* eslint-enable react/prop-types */

describe('Accordion Component', () => {
  const mockHeading = 'Test Accordion';
  const mockContent = ['Item 1', 'Item 2', 'Item 3'];

  test('renders accordion with correct heading', () => {
    render(<Accordion heading={mockHeading} content={mockContent} />);

    expect(screen.getByText(mockHeading)).toBeInTheDocument();
    expect(screen.getByText('expand_more')).toBeInTheDocument();
  });

  test('accordion content is not visible initially', () => {
    render(<Accordion heading={mockHeading} content={mockContent} />);

    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  test('expands and shows content when clicked', () => {
    render(<Accordion heading={mockHeading} content={mockContent} />);

    const header = screen.getByTestId('accordion-header');
    fireEvent.click(header);

    expect(screen.getByTestId('accordion-content')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('expand_less')).toBeInTheDocument();
  });

  test('collapses when clicked again', () => {
    render(<Accordion heading={mockHeading} content={mockContent} />);

    const header = screen.getByTestId('accordion-header');
    fireEvent.click(header); // Expand
    fireEvent.click(header); // Collapse

    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    expect(screen.getByText('expand_more')).toBeInTheDocument();
  });

  test('displays empty state message when content array is empty', () => {
    render(<Accordion heading={mockHeading} content={[]} />);

    const header = screen.getByTestId('accordion-header');
    fireEvent.click(header);

    expect(screen.getByText('List Is Empty')).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    render(<Accordion heading={mockHeading} content={mockContent} />);

    const header = screen.getByTestId('accordion-header');

    expect(header).toHaveAttribute('aria-expanded', 'false');
    expect(header).toHaveAttribute('role', 'button');
    expect(header).toHaveAttribute('aria-label', `${mockHeading} accordion collapsed`);

    fireEvent.click(header);

    expect(header).toHaveAttribute('aria-expanded', 'true');
    expect(header).toHaveAttribute('aria-label', `${mockHeading} accordion expanded`);

    const content = screen.getByTestId('accordion-content');
    expect(content).toHaveAttribute('role', 'region');
    expect(header).toHaveAttribute('aria-controls', content.id);
    expect(content).toHaveAttribute('aria-labelledby', header.id);
  });
});

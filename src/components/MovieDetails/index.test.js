import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieDetails from './index';

// Mock the Accordion component as it's not relevant to testing MovieDetails directly
jest.mock('components/Accordion', () => {
  // Import PropTypes inside the mock function
  const PropTypes = require('prop-types');

  const MockAccordion = ({ heading, content, ...props }) => (
    <div data-testid={`accordion-${heading.toLowerCase()}`} {...props}>
      <h3>{heading}</h3>
      <div>{content.length} items</div>
    </div>
  );

  MockAccordion.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
  };

  MockAccordion.displayName = 'MockAccordion';

  return MockAccordion;
});

const mockMovieDetails = {
  title: 'A New Hope',
  opening_crawl: 'It is a period of civil war. Rebel spaceships...',
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2014-12-20T19:49:45.256000Z',
  release_date: '1977-05-25',
  characters: ['Luke Skywalker', 'C-3PO', 'R2-D2'],
  planets: ['Tatooine', 'Alderaan'],
  species: ['Human', 'Droid'],
  starships: ['X-wing', 'Death Star'],
  vehicles: ['Sand Crawler', 'TIE fighter'],
};

const renderWithRouter = (ui) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('MovieDetails Component', () => {
  test('renders the movie title correctly', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
  });

  test('renders the back button with correct link', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    const backButton = screen.getByText('Back');
    expect(backButton.closest('a')).toHaveAttribute('href', '/movies');
  });

  test('renders director and producer information', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(screen.getByText('Director by: George Lucas')).toBeInTheDocument();
    expect(screen.getByText('Producer by: Gary Kurtz, Rick McCallum')).toBeInTheDocument();
  });

  test('renders opening crawl text', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(
      screen.getByText('It is a period of civil war. Rebel spaceships...')
    ).toBeInTheDocument();
  });

  test('renders date information correctly', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(screen.getByText('Created:')).toBeInTheDocument();
    expect(screen.getByText('2014-12-10T14:23:31.880000Z')).toBeInTheDocument();
    expect(screen.getByText('Edited:')).toBeInTheDocument();
    expect(screen.getByText('2014-12-20T19:49:45.256000Z')).toBeInTheDocument();
    expect(screen.getByText('Release date:')).toBeInTheDocument();
    expect(screen.getByText('1977-05-25')).toBeInTheDocument();
  });

  test('renders all accordions with correct headings', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(screen.getByTestId('accordion-characters')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-species')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-vehicles')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-starships')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-planets')).toBeInTheDocument();
  });

  test('contains proper accessibility attributes', () => {
    renderWithRouter(<MovieDetails details={mockMovieDetails} />);
    expect(screen.getByLabelText('movie-details')).toBeInTheDocument();
    expect(screen.getByLabelText('back-to-movies')).toBeInTheDocument();
    expect(screen.getByLabelText('movie-info')).toBeInTheDocument();
    expect(screen.getByLabelText('movie-dates')).toBeInTheDocument();
    expect(screen.getByLabelText('related-info')).toBeInTheDocument();
    expect(screen.getByLabelText('characters-list')).toBeInTheDocument();
    expect(screen.getByLabelText('species-list')).toBeInTheDocument();
    expect(screen.getByLabelText('vehicles-list')).toBeInTheDocument();
    expect(screen.getByLabelText('starships-list')).toBeInTheDocument();
    expect(screen.getByLabelText('planets-list')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieCard from './index';

// Helper to mock window.matchMedia
const mockMatchMedia = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe('MovieCard Component', () => {
  const mockMovie = {
    id: 1,
    title: 'A New Hope',
    producer: 'George Lucas',
    opening_crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base...',
  };

  let cardElement;
  let titleElement;
  let producerElement;
  let descriptionElement;
  let linkElement;
  let buttonElement;

  beforeEach(() => {
    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );

    cardElement = screen.getByLabelText('movie-card');
    titleElement = screen.getByLabelText('movie-title');
    producerElement = screen.getByLabelText('movie-producer');
    descriptionElement = screen.getByLabelText('movie-description');
    linkElement = screen.getByLabelText(`view-details-${mockMovie.title}`);
    buttonElement = screen.getByLabelText('view-button');
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the MovieCard container', () => {
    expect(cardElement).toBeInTheDocument();
  });

  it('displays the correct movie title', () => {
    expect(titleElement).toHaveTextContent(mockMovie.title);
  });

  it('displays the correct producer information', () => {
    expect(producerElement).toHaveTextContent(`By: ${mockMovie.producer}`);
  });

  it('displays the correct movie description', () => {
    expect(descriptionElement).toHaveTextContent(mockMovie.opening_crawl);
  });

  it('renders the link with correct href', () => {
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/movies/${mockMovie.id}`);
  });

  it('renders the View Movie button', () => {
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('View Movie');
  });

  it('applies default styles to card container', () => {
    expect(cardElement).toHaveStyle('position: relative');
    expect(cardElement).toHaveStyle('border-radius: 8px');
    expect(cardElement).toHaveStyle('overflow: hidden');
  });
});

describe('MovieCard Component Responsive Behavior', () => {
  const mockMovie = {
    id: 1,
    title: 'A New Hope',
    producer: 'George Lucas',
    opening_crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base...',
  };

  it('applies responsive styles for medium screens', () => {
    // Mock matchMedia for medium screen testing
    mockMatchMedia(true);

    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );

    const cardElement = screen.getByLabelText('movie-card');

    expect(cardElement).toHaveStyleRule('width', 'calc(50% - 32px)', {
      media: '(max-width: 1024px)',
    });
  });

  it('applies responsive styles for small screens', () => {
    // Mock matchMedia for small screen testing
    mockMatchMedia(true);

    render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );

    const cardElement = screen.getByLabelText('movie-card');
    const titleElement = screen.getByLabelText('movie-title');
    const producerElement = screen.getByLabelText('movie-producer');
    const descriptionElement = screen.getByLabelText('movie-description');

    expect(cardElement).toHaveStyleRule('width', 'calc(100% - 32px)', {
      media: '(max-width: 768px)',
    });

    expect(titleElement).toHaveStyleRule('font-size', '24px', {
      media: '(max-width: 768px)',
    });

    expect(producerElement).toHaveStyleRule('font-size', '11px', {
      media: '(max-width: 768px)',
    });

    expect(descriptionElement).toHaveStyleRule('font-size', '14px', {
      media: '(max-width: 768px)',
    });
  });

  it('handles movies with non-standard titles correctly', () => {
    const customMovie = {
      id: 7,
      title: 'Custom Movie',
      producer: 'Test Producer',
      opening_crawl: 'Test description',
    };

    render(
      <Router>
        <MovieCard movie={customMovie} />
      </Router>
    );

    const titleElement = screen.getByLabelText('movie-title');
    expect(titleElement).toHaveTextContent('Custom Movie');
  });
});

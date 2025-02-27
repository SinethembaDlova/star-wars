import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './index';

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

describe('Navbar Component', () => {
  let navElement;
  let logoLink;
  let logoElement;

  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    navElement = screen.getByLabelText('nav');
    logoLink = screen.getByLabelText('home');
    logoElement = screen.getByLabelText('logo');
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Navbar container', () => {
    expect(navElement).toBeInTheDocument();
  });

  it('renders the LogoContainer with a link to the home page', () => {
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('applies default styles for large screens', () => {
    expect(navElement).toHaveStyle('background-color: #2d1728');
    expect(navElement).toHaveStyle('height: 80px');
    expect(navElement).toHaveStyle('padding: 0 60px');
    expect(navElement).toHaveStyle('position: fixed');
    expect(navElement).toHaveStyle('top: 0');
    expect(navElement).toHaveStyle('width: 100%');
  });

  it('renders the StyledLogo inside the LogoContainer', () => {
    expect(logoElement).toBeInTheDocument();
  });
});

describe('Navbar Component Responsive Behavior', () => {
  it('applies responsive styles for smaller screens', () => {
    // Mock matchMedia for responsive testing
    mockMatchMedia(true);

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const navElement = screen.getByLabelText('nav');
    const logoElement = screen.getByLabelText('logo');

    expect(navElement).toHaveStyleRule('height', '60px', {
      media: '(max-width: 768px)',
    });
    expect(navElement).toHaveStyleRule('padding', '0 20px', {
      media: '(max-width: 768px)',
    });
    expect(logoElement).toHaveStyleRule('height', '30px', {
      media: '(max-width: 768px)',
    });
  });
});

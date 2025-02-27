import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Loader from './index';

describe('Loader Component', () => {
  let overlayElement;
  let spinnerElement;

  beforeEach(() => {
    render(<Loader />);
    overlayElement = screen.getByLabelText('loading-overlay');
    spinnerElement = screen.getByLabelText('loading-spinner');
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the LoaderOverlay', () => {
    expect(overlayElement).toBeInTheDocument();
  });

  it('renders the LoaderContainer spinner', () => {
    expect(spinnerElement).toBeInTheDocument();
  });

  it('applies correct styles to the overlay container', () => {
    expect(overlayElement).toHaveStyle('height: 60vh');
    expect(overlayElement).toHaveStyle('width: 100%');
    expect(overlayElement).toHaveStyle('display: flex');
    expect(overlayElement).toHaveStyle('justify-content: center');
    expect(overlayElement).toHaveStyle('align-items: center');
  });

  it('applies correct styles to the spinner', () => {
    expect(spinnerElement).toHaveStyle('width: 180px');
    expect(spinnerElement).toHaveStyle('height: 180px');
    expect(spinnerElement).toHaveStyle('border: 18px solid #e50914');
    expect(spinnerElement).toHaveStyle('border-radius: 50%');
    expect(spinnerElement).toHaveStyle('border-top-color: #274064');
  });

  it('has the correct animation property on the spinner', () => {
    expect(spinnerElement).toHaveStyleRule('animation', 'spin 1s ease-in-out infinite');
    // Testing keyframes directly is challenging with jest-styled-components
    // We'll verify the animation name is correctly set
  });
});

import React from 'react';
import { LoaderContainer, LoaderOverlay } from './index.style';

const Loader = () => {
  return (
    <LoaderOverlay aria-label="loading-overlay">
      <LoaderContainer aria-label="loading-spinner" />
    </LoaderOverlay>
  );
};

export default Loader;

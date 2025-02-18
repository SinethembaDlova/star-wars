import styled from 'styled-components';

const LoaderOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
  display: inline-block;
  width: 180px;
  height: 180px;
  border: 18px solid #e50914; // Primary color
  border-radius: 50%;
  border-top-color: #274064; // Secondary color
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export { LoaderOverlay, LoaderContainer };

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
  width: 100px;
  height: 100px;
  border: 10px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #274064;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export { LoaderOverlay, LoaderContainer };

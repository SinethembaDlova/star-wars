import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #20101C;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px;
  padding-top: calc(80px + 20px);
  min-height: calc(100vh - 80px);
  background: #20101C;

  @media (max-width: 768px) {
    padding-top: calc(60px + 20px);
  }
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => margin || ''};
  margin-bottom: ${({ mb }) => mb || '50px'};
  margin-top: ${({ mt }) => mt || ''};
  color: #274064;
  letter-spacing: 0.1rem;
  line-height: 1.06;
  width: ${({ width }) => width || '100%'};
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || ''};
  align-items: ${({ align }) => align || ''};
  gap: ${({ gap }) => gap || ''};
  padding: ${({ padding }) => padding || ''};
  margin: ${({ margin }) => margin || ''};
  margin-bottom: ${({ mb }) => mb || ''};
  position: ${({ position }) => position || ''};
  width: ${({ width }) => width || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  height: ${({ height }) => height || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  flex-wrap: ${({ wrap }) => wrap || ''};

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || ''};
  align-items: ${({ align }) => align || ''};
  gap: ${({ gap }) => gap || ''};
  padding: ${({ padding }) => padding || ''};
  margin: ${({ margin }) => margin || ''};
  position: ${({ position }) => position || ''};
  width: ${({ width }) => width || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  height: ${({ height }) => height || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  background: ${({ background }) => background || 'auto'};
`;

export default GlobalStyle;
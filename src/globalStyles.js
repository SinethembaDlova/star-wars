import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #20101C;
    color: #ffffff;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px;
  padding-top: calc(80px + 20px);
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding-top: calc(60px + 20px);
  }
`;

export const Heading = styled.h2`
  font-size: clamp(20px, 13vw, 50px);
  margin: ${({ margin }) => margin || ''};
  margin-bottom: ${({ mb }) => mb || '20px'};
  margin-top: ${({ mt }) => mt || ''};
  letter-spacing: 2px;
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
  margin-right: ${({ mr }) => mr || ''};

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default GlobalStyle;
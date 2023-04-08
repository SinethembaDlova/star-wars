import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
  background-color: #ffffffffffff;
}`;

export const Container = styled.div`
  margin: 60px auto auto 180px;
  padding: 50px;
  min-height: calc(100vh - 60px);
  background: #f0f2f5;
  @media only screen and (max-width: 600px) {
    margin: 0 auto auto 68px;
    padding: 65px;
  }
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '50px')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: '#274064';
  letter-spacing: 0.1rem;
  line-height: 1.06;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
`;

export default GlobalStyle;

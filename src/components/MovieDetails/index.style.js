import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Heading } from '../../globalStyles';

const MovieDetailsContainer = styled.div`
  background-csolor: #f5f5f5;
`;

const HeadingContainer = styled(Row)`
  background: inherit;
  color: dark silver;
`;

const BackIcon = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  i {
    font-size: 3rem;
  }

  &:hover {
    opacity: 100%;
  }
`;

const Title = styled(Heading)`
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.3vw, 1.5rem);
  line-height: 25px;
  letter-spacing: 2px;
`;

const Label = styled.span`
  font-size: clamp(0.8rem, 1.4vw, 1.3rem);
  line-height: 25px;
  letter-spacing: 2px;
`;

const ListTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export {
  MovieDetailsContainer,
  HeadingContainer,
  BackIcon,
  Title,
  Description,
  Label,
  ListTextWrapper,
  ListWrapper,
};
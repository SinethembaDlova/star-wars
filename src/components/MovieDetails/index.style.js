import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Heading } from '../../globalStyles';

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

const Label = styled.h4`
  font-family: inherit;
  font-size: 1.8rem;
  color: #9d9d9d;
  margin-bottom: 1.5rem;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ListTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

const ListWrapper = styled(Col)`
  margin-top: 4rem;
  grid-gap: 2rem;
`;

export {
  MovieDetailsContainer,
  HeadingContainer,
  BackIcon,
  Title,
  Description,
  Team,
  Label,
  ListTextWrapper,
  ListWrapper,
};

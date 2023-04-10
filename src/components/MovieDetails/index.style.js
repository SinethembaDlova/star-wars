import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Heading } from '../../globalStyles';

const MovieDetailsContainer = styled.div`
  background-csolor: #f5f5f5;
`;

const BackContainer = styled(Row)`
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
  padding-right: 25px;
  margin-bottom: 10px;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ListWrapper = styled(Col)`
  grid-gap: 2rem;
  background: #ffffffffffff;
`;

const DateContainer = styled(Row)`
  align-items: center;
  border-top: 1px solid #9d9d9d;
  padding-top: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1.5rem;
`;

const DateItem = styled(Row)`
  background: #474f5f;
  color: #ffffff;
  padding: 15px;
  align-items: center;
`;

const Label = styled.p`
  font-family: inherit;
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
`;

const Value = styled.span`
  font-family: inherit;
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
  margin-left: 0.5rem;
`;

export {
  MovieDetailsContainer,
  BackContainer,
  BackIcon,
  Title,
  Description,
  Team,
  ListWrapper,
  DateContainer,
  DateItem,
  Label,
  Value,
};

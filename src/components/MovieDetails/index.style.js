import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Heading } from '../../globalStyles';

const MovieDetailsContainer = styled.div`
  background-color: #20101C;
  color: #ffffff;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;

  }
`;

const BackContainer = styled(Row)`
  background: inherit;
  color: #9d9d9d;
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
    opacity: 0.8;
  }
`;

const Title = styled(Heading)`
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: clamp(16px, 1.3vw, 24px);
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Team = styled.p`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ListWrapper = styled(Col)`
  gap: 20px;
  background: #ffffff;
`;

const DateContainer = styled(Row)`
  align-items: center;
  border-top: 1px solid #9d9d9d;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

  }
`;

const DateItem = styled(Row)`
  background: #474f5f;
  color: #ffffff;
  padding: 15px;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.p`
  font-size: clamp(14px, 1.2vw, 20px);
`;

const Value = styled.span`
  font-size: clamp(14px, 1.2vw, 20px);
  margin-left: 8px;
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
  Value
};
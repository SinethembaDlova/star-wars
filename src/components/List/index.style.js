import { Col } from '../../globalStyles';
import styled from 'styled-components';

const ListColumn = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 100%
  background: #f3f3f3;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  h5 {
    background-color: #081b4b;
    color: #ffffff;
    text-align: left;
    padding: 16px;
    margin: 0;
  }

  li {
    text-align: center;
    padding: 16px 16px;
    border-bottom: 1px solid #dddddd;
    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    &:last-of-type {
      border-bottom: 2px solid #009879;
    }
    &.active-row {
      font-weight: bold;
      color: #009879;
    }
  }
`;

const ListHeading = styled.h5`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 0.5;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { ListColumn, ListHeading, List, ListItem };

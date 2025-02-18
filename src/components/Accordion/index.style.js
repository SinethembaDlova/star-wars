import { Row } from '../../globalStyles';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
  background-color: #ffffff;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AccordionHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  background-color: #274064;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  width: 100%;

  i {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const AccordionContent = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background-color: #ffffff;
  width: 100%;

  li {
    margin-bottom: 10px;
    text-align: center;
    padding: 16px;
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

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #626881;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.2;
    padding: 12px;
  }
`;

export { AccordionContainer, AccordionHeader, AccordionContent, List, ListItem };

import { Row } from '../../globalStyles';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
`;

const AccordionHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  background-color: #274064;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  cursor: pointer;

  i {
    font-size: 2rem;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  li {
    margin-bottom: 10px;
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

export { AccordionContainer, AccordionHeader, AccordionContent, List, ListItem };

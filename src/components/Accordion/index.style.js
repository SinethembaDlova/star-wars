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
  padding: 18px;
  cursor: pointer;

  i {
    font-size: 2rem;
  }
`;

const AccordionContent = styled.div`
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
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 1rem;
  line-height: 0.5px;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { AccordionContainer, AccordionHeader, AccordionContent, List, ListItem };

import styled from 'styled-components';

const ListColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`;

const ListHeading = styled.h3`
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
import styled from 'styled-components';
import { Row } from '../../globalStyles';
const MovieDetailsContainer = styled.div`
  background-csolor: #f5f5f5;
  padding: 20px;
`;

const Back = styled(Row)`
  background: inherit;
  color: dark silver;

  i {
    font-size: 3rem;
  }
`;

export { MovieDetailsContainer, Back };

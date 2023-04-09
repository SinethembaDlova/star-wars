import styled from 'styled-components';
import { Row } from '../../globalStyles';

const MovieDetailsContainer = styled.div`
  background-csolor: #f5f5f5;
`;

const Back = styled(Row)`
  background: inherit;
  color: dark silver;

  i {
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Label = styled.span`
  font-weight: bold;
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

export { MovieDetailsContainer, Back, Title, Description, Label, ListTextWrapper, ListWrapper };

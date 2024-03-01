import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDate = styled.p`
  font-size: 0.8rem;
  color: white;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.5;
`;

const CardButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  margin-top: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dddddd;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: calc(33.33% - 2rem);
  margin: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`;

export {
  CardWrapper,
  CardImageOverlay,
  CardImage,
  CardTitle,
  CardDate,
  CardDescription,
  CardButton,
  CardContainer,
};

import styled from 'styled-components';

export const CardContainer = styled.div`
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

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
`;

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  color: white;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CardDate = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: none;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dddddd;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: calc(33.33% - 32px);
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 32px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }
`;

const CardWrapper = styled.div`
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

const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  color: white;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CardTitle = styled.h3`
  font-size: 29px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CardProducer = styled.p`
  font-size: 13px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: none;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardButton = styled.button`
  background-color: #E50914;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #dddddd;
    color: #274064;
  }

  @media (max-width: 768px) {
    padding: 6px 13px;
  }
`;

export {
  CardWrapper,
  CardImageOverlay,
  CardHeader,
  CardTitle,
  CardProducer,
  CardDescription,
  CardButton,
  CardContainer,
};
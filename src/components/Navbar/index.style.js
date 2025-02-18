import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #000000;
  display: flex;
  align-items: center;
  padding: 0 60px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledLogo = styled(Logo)`
  fill: white;
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

export { NavbarContainer, LogoContainer, StyledLogo };

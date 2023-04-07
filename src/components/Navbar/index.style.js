import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 180px;
  width: 100%;
  height: 60px;
  background-color: #ffffffffffff;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 2px;
  @media (max-width: 600px) {
    height: 65px;
    left: 68px;
  }
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export { NavbarContainer, NavbarInnerContainer };

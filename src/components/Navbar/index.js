import React from 'react';
import { NavbarContainer, LogoContainer, StyledLogo } from './index.style';

const Navbar = () => {
  return (
    <NavbarContainer aria-label="nav">
      <LogoContainer to="/" aria-label="home">
        <StyledLogo aria-label="logo" />
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;

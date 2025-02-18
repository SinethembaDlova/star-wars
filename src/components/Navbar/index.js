import React from 'react';
import { NavbarContainer, LogoContainer, StyledLogo } from './index.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer to="/">
        <StyledLogo />
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;

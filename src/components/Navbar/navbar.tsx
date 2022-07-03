import React, { ReactElement } from "react";
import {
  NavbarRoot,
  NavbarContainer,
  BrandPlaceholder,
  NavPlaceholder,
} from "./navbar.styled";

type NavbarProps = {
  logo?: ReactElement | string;
  children: ReactElement;
};

const Navbar = ({ logo, children }: NavbarProps) => {
  return (
    <NavbarRoot>
      <NavbarContainer>
        <BrandPlaceholder>{logo}</BrandPlaceholder>

        <NavPlaceholder>{children}</NavPlaceholder>
      </NavbarContainer>
    </NavbarRoot>
  );
};

export default Navbar;

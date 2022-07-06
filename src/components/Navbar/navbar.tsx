import { Box, Typography } from "@mui/material";
import Nav from "components/Nav/nav";
import React, { ReactElement } from "react";
import {
  NavbarRoot,
  NavbarContainer,
  BrandPlaceholder,
  NavPlaceholder,
} from "./navbar.styled";

type NavbarProps = {
  logo?: ReactElement | string;
};

const Navbar = ({ logo }: NavbarProps) => {
  return (
    <NavbarRoot>
      <NavbarContainer>
        <BrandPlaceholder>{logo}</BrandPlaceholder>

        <NavPlaceholder>
          <Nav />

          <Box display="flex" alignItems="center" marginLeft="auto" gap={1}>
            <Typography component="span">Find me on</Typography>
          </Box>
        </NavPlaceholder>
      </NavbarContainer>
    </NavbarRoot>
  );
};

export default Navbar;

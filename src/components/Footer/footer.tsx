import { Box, Container, Divider } from "@mui/material";
import { Copyright, LangSwitcher } from "components";
import React from "react";
import { FooterRoot } from "./footer.styled";

const Footer = () => {
  return (
    <FooterRoot>
      <Container>
        <Divider sx={{ marginBottom: 3 }} />
        <Box display="flex" alignItems="center">
          <Copyright />
        </Box>
      </Container>
    </FooterRoot>
  );
};

export default Footer;

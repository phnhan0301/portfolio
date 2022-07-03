import { Container, Divider } from "@mui/material";
import { Copyright } from "components";
import React from "react";
import { FooterRoot } from "./footer.styled";

const Footer = () => {
  return (
    <FooterRoot>
      <Container>
        <Divider sx={{ marginBottom: 3 }} />
        <Copyright />
      </Container>
    </FooterRoot>
  );
};

export default Footer;

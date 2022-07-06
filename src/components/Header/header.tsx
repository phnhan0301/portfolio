import { Box, Container, Typography } from "@mui/material";
import { Waves } from "components/Waves";
import React, { ReactElement } from "react";
import { HeaderRoot } from "./header.styled";

const Header = () => {
  return (
    <HeaderRoot>
      <Box margin="auto">
        <Container>
          <Typography
            variant="h2"
            color="white"
            fontWeight={600}
            fontFamily={`'Fredericka the Great',Mulish,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif`}
            sx={{
              textShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            Z31o_0&apos;s Portfolio
          </Typography>
        </Container>
      </Box>
      <Waves />
    </HeaderRoot>
  );
};

export default Header;

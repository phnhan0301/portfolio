import { Box, Typography } from "@mui/material";
import type { AppLayout } from "app/types";
import { Footer, Header, Nav, Navbar, ProfileAside, Waves } from "components";
import React from "react";
import { AsideRoot, MainRoot, PageLayout, Wrapper } from "./MainLayout.styed";

const MainLayout: AppLayout = ({ children }) => {
  return (
    <PageLayout>
      <Header>
        <Waves />
      </Header>

      <Navbar>
        <>
          <Nav />

          <Box display="flex" alignItems="center" marginLeft="auto" gap={1}>
            <Typography component="span">Find me on</Typography>
          </Box>
        </>
      </Navbar>

      <Wrapper>
        <AsideRoot>
          <ProfileAside />
        </AsideRoot>

        <MainRoot>{children}</MainRoot>
      </Wrapper>

      <Footer />
    </PageLayout>
  );
};

export default MainLayout;

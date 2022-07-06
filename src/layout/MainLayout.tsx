import type { AppLayout } from "app/types";
import { Footer, Header, Navbar, ProfileAside } from "components";
import React from "react";
import {
  AsidePlaceholder,
  MainRoot,
  PageLayout,
  Wrapper,
} from "./MainLayout.styed";

const MainLayout: AppLayout = ({ children }) => {
  return (
    <PageLayout>
      <Header />

      <Navbar />

      <Wrapper>
        <AsidePlaceholder>
          <ProfileAside />
        </AsidePlaceholder>

        <MainRoot>{children}</MainRoot>
      </Wrapper>

      <Footer />
    </PageLayout>
  );
};

export default MainLayout;

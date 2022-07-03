import { Box, Container, styled } from "@mui/material";
import { forwardRef, ReactElement } from "react";

const MainBox = forwardRef(function MainBox(props, ref) {
  return <Box ref={ref} component="main" {...props} />;
});

export const PageLayout = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

export const Wrapper = styled(Container)(() => ({
  display: "grid",
  gridTemplateColumns: "296px 1fr",
  gridTemplateAreas: "'aside main'",
  gap: "24px",
}));

export const MainRoot = styled(MainBox)<{ children: ReactElement }>(() => ({
  gridArea: "main",
}));

export const AsideRoot = styled(Box)(() => ({
  gridArea: "aside",
  transform: "translateY(-78px)",
}));

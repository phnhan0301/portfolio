import { Breadcrumbs, styled } from "@mui/material";

export const BreadcrumbsRoot = styled(Breadcrumbs)(() => ({
  marginBottom: "12px",

  "& *": {
    fontFamily: "'Space Mono', monospace",
  },
}));

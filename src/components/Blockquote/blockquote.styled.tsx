import { Box, styled } from "@mui/material";

export const BlockquoteRoot = styled(Box)(({ theme: { palette } }) => ({
  padding: "8px 16px",
  borderLeft: `3px solid ${palette.secondary.light}`,
}));

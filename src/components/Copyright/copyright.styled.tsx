import { styled, Typography } from "@mui/material";

export const CopyrightText = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#C5C8CD",

  "& strong": {
    color: "#2c3e50",
  },
}));

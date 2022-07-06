import { styled } from "@mui/material";

export const HeaderRoot = styled("header")(() => ({
  height: "350px",
  background: '#fff url("/images/header_bg.png") no-repeat center center',
  display: "flex",
  position: "relative",
  zIndex: "0",

  "&::before": {
    position: "absolute",
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: "-1",
    pointerEvents: "none",
  },
}));

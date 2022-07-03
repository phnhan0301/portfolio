import { styled } from "@mui/material";

export const AvatarRoot = styled("div")<{ width: number; height: number }>(
  ({ width, height }) => ({
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: "99rem",
    border: " 1px solid #D8DEE4",
    boxShadow: "0px 0px 0px 1px rgba(240, 246, 252, 0.1)",
    overflow: "hidden",
    position: "relative",

    "& img": {
      position: "absolute",
      width: "auto",
      height: "100%",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },
  })
);

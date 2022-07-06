import { styled } from "@mui/material";

export const WavesRoot = styled("svg")(() => ({
  width: "100%",
  height: "13vh",
  marginBottom: "-.6875rem",
  minHeight: "3.125rem",
  maxHeight: "9.375rem",
  position: "absolute",
  left: 0,
  bottom: 0,
}));

export const Parallax = styled("g")(() => ({
  "@keyframes wave": {
    from: {
      transform: "translate3d(-90px, 0, 0)",
    },

    to: {
      transform: "translate3d(85px, 0, 0)",
    },
  },

  "& > use": {
    animation: "wave 25s cubic-bezier(.55, .5, .45, .5) infinite",

    "&:nth-of-type(1)": {
      animationDelay: "-2s",
      animationDuration: "7s",
      fill: "rgba(253,253,253,0.7)",
    },
    "&:nth-of-type(2)": {
      animationDelay: "-3s",
      animationDuration: "10s",
      fill: "rgba(253,253,253,0.5)",
    },
    "&:nth-of-type(3)": {
      animationDelay: "-4s",
      animationDuration: "13s",
      fill: "rgba(253,253,253,0.3)",
    },
    "&:nth-of-type(4)": {
      animationDelay: "-5s",
      animationDuration: "20s",
      fill: "#fdfdfd",
    },
  },
}));

import { ListItem as MuiListItem, styled } from "@mui/material";

export const ProjectItemRoot = styled("article")(() => ({
  width: "100%",
}));

export const ProjectIcon = styled("div")(() => ({
  "& img": {
    filter: "opacity(30%)",
  },
}));

export const FeatureImage = styled("div")(({ theme }) => ({
  aspectRatio: "16 / 9",
  height: "60px",
  position: "relative",
  overflow: "hidden",
  boxShadow: theme.shadows[1],

  "& img": {
    position: "absolute",
    height: "100%",
    width: "auto",
    minWidth: "100%",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

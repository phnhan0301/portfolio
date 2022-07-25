import {
  alpha,
  Card,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
  Tab as MuiTab,
  styled,
  Tabs,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const PageBanner = styled(Card)(() => ({
  background: '#fff url("/images/projects-banner.png") no-repeat center center',
  backgroundSize: "cover",
  minHeight: "210px",

  "& p": {
    fontSize: "14px",
  },
}));

export const ReleaseYearFilter = styled(MuiList)(() => ({
  padding: 0,
}));

export const ListItem = styled(MuiListItem)<{ activated?: boolean }>(
  ({ activated, theme: { palette } }) => ({
    padding: 0,
    marginBottom: "0.25rem",
    transition: "all 0.3s ease-in-out",
    borderRadius: 0,

    ...(activated && {
      backgroundColor: palette.secondary.main,
      color: "#fff",
      borderRadius: "4px",
    }),

    "&:hover": {
      borderRadius: "4px",
      backgroundColor: palette.secondary.main,
      color: "#fff",
      boxShadow: `
      0 0 #0000,
      0 0 #0000,
      0 10px 15px -3px ${alpha(palette.secondary.main, 0.5)},
      0 4px 6px -4px ${alpha(palette.secondary.main, 0.5)}`,
    },
  })
);

export const ListItemText = styled(MuiListItemText)(() => ({
  margin: 0,
}));

export const TopicFilter = styled(Tabs)(() => ({
  minHeight: "auto",
  maxWidth: "689px",

  "& .Mui-disabled": {
    display: "none",
  },
}));

export const Tab = styled(MuiTab)(() => ({
  minHeight: "auto",
  padding: "8px 16px",
  minWidth: "auto",
  color: blueGrey[200],

  "&.Mui-selected": {
    color: "inherit",
    fontWeight: "500",
  },
}));

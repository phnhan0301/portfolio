import { Link, styled } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";

interface NavItemProps extends MUIStyledCommonProps {
  state?: "activated" | null;
}

export const NavRoot = styled("ul")(() => ({
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0,
  gap: "16px",
}));

export const NavItem = styled("li")(({ state, theme }: NavItemProps) => ({
  paddingTop: "8px",
  paddingBottom: "8px",
  position: "relative",
  transition: "all 0.3s ease-in-out",

  ...(state == "activated" && {
    "&::after": {
      position: "absolute",
      content: "''",
      left: 0,
      bottom: 0,
      height: "3px",
      width: "100%",
      borderRadius: "99rem",
      background: theme?.palette.secondary.main,
    },
  }),
}));

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  gap: "8px",
  padding: "4px 8px",
  transition: "all 0.3s ease-in-out",
  alignItems: "center",

  "&:hover": {
    background: theme?.palette.secondary.light,
    borderRadius: "4px",
  },
}));

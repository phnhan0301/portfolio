import { Container, styled } from "@mui/material";

export const NavbarRoot = styled("nav")(() => ({
  borderBottom: "1px solid #D8DEE4",
}));

export const NavbarContainer = styled(Container)(() => ({
  display: "grid",
  alignItems: "center",
  gap: "24px",
  gridTemplateColumns: "296px 1fr",
  gridTemplateAreas: "'brand nav'",
}));

export const BrandPlaceholder = styled("div")(() => ({
  gridArea: "brand",
}));

export const NavPlaceholder = styled("div")(() => ({
  gridArea: "nav",
  display: "flex",
  alignItems: "center",
}));

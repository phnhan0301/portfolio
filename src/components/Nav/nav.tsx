import { Chip, Typography } from "@mui/material";
import Router from "next/link";
import { useRouter } from "next/router";
import { NavRoot, NavItem, NavLink } from "./nav.styled";

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <NavRoot>
      <NavItem activated={asPath === "/"}>
        <Router href="/" passHref>
          <NavLink>
            <img src="/icons/overview.svg" alt="overview" />
            <Typography component="span">Overview</Typography>
          </NavLink>
        </Router>
      </NavItem>

      <NavItem activated={asPath.startsWith("/projects")}>
        <Router href="/projects" passHref>
          <NavLink>
            <img src="/icons/projects.svg" alt="overview" />
            <Typography component="span">Projects</Typography>
            <Chip label="7" size="small" />
          </NavLink>
        </Router>
      </NavItem>

      <NavItem activated={asPath.startsWith("/contact-me")}>
        <Router href="/contact-me" passHref>
          <NavLink>
            <img src="/icons/contact.svg" alt="overview" />
            <Typography component="span">Contact Me</Typography>
          </NavLink>
        </Router>
      </NavItem>
    </NavRoot>
  );
};

export default Nav;

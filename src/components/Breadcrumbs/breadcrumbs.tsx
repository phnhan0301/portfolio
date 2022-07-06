import { Link, Typography } from "@mui/material";
import Router from "next/link";
import React, { Fragment } from "react";
import { BreadcrumbsRoot } from "./breadcrumbs.styled";

type BreadcrumbLink = {
  path?: string;
  title: string;
};

interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

const Breadcrumbs = ({ links }: BreadcrumbProps) => {
  return (
    <BreadcrumbsRoot aria-label="breadcrumb">
      <Router href="/" passHref>
        <Link underline="hover" color="inherit">
          z31o_0
        </Link>
      </Router>
      {links.map((item, idx) =>
        item.path ? (
          <Router href={item.path} key={idx}>
            <Link underline="hover" color="inherit">
              {item.title}
            </Link>
          </Router>
        ) : (
          <Typography key={idx}>{item.title}</Typography>
        )
      )}
    </BreadcrumbsRoot>
  );
};

export default Breadcrumbs;

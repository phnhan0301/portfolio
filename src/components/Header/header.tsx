import React, { ReactElement } from "react";
import { HeaderRoot } from "./header.styled";

const Header = ({ children }: { children: ReactElement }) => {
  return <HeaderRoot>{children}</HeaderRoot>;
};

export default Header;

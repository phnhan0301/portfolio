import { BoxProps } from "@mui/system";
import React, { forwardRef, ReactElement } from "react";
import { BlockquoteRoot } from "./blockquote.styled";

interface BlockquoteProps extends BoxProps {}

const Blockquote = forwardRef(function Blockquote(props: BlockquoteProps, ref) {
  return (
    <BlockquoteRoot ref={ref} {...props}>
      {props.children}
    </BlockquoteRoot>
  );
});

export default Blockquote;

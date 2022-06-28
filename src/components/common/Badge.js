import styled from "@emotion/styled";
import React from "react";
import { parsedStyle } from "../../utils/tools";

function Badge({
  color = "info",
  size = "normal",
  variant = "rounded",
  children,
}) {
  const Block = styled("div")(({ theme }) => ({
    ...parsedStyle(color, size, variant, theme),
    backgroundColor: theme.palette[color] + 55,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette[color],
  }));
  return <Block>{children}</Block>;
}

export default Badge;

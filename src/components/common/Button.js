/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { parsedStyle, replaceSize, SIZE } from "../../utils/tools";

function Button({
  color = "info",
  size = "normal",
  variant = "rounded",
  style,
  children,
}) {
  const Block = styled("button")(({ theme }) => ({
    ...parsedStyle(color, size, variant, theme),
    lineHeight: variant !== "circle" ? 1 * SIZE[replaceSize(size)] : 1,
    cursor: "pointer",
    transition: "color, filter, box-shadow 150ms ease-in-out",
    ...(variant === "circle" && {
      width: SIZE[replaceSize(size)] * 30,
      height: SIZE[replaceSize(size)] * 30,
    }),
    "&:hover": {
      filter: `brightness(105%)`,
      boxShadow: `0 0 0 3px ${theme.palette[color]}55`,
    },
    "&:focus-within": {
      filter: `brightness(105%)`,
      boxShadow: `0 0 0 4.5px ${theme.palette[color]}85`,
    },
    ...style,
  }));
  return <Block>{children}</Block>;
}

export default Button;

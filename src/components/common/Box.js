import React from "react";
import styled from "@emotion/styled";

function Box({ width, height, src, children }) {
  const Block = styled(src ? "img" : "div")`
    width: ${width}px;
    height: ${height}px;
    background-color: ${({ theme }) => theme.palette.gray};
  `;
  return <Block>{children}</Block>;
}

export default Box;

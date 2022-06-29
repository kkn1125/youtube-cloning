import styled from "@emotion/styled";
import React from "react";

function Box({ width, height, src, children }) {
  const Block = styled(Boolean(src) ? "img" : "div")(({ theme }) => ({
    width: width,
    height: height,
    backgroundColor: theme.palette.gray,
  }));
  return <Block src={src}>{children}</Block>;
}

export default Box;

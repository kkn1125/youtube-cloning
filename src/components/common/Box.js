import styled from "@emotion/styled";
import React from "react";

function Box({ width, height, src, children }) {
  const Block = styled(src ? "img" : "div")(({ theme }) => ({
    width: width,
    height: height,
    backgroundColor: theme.palette.gray,
  }));
  return <Block>{children}</Block>;
}

export default Box;

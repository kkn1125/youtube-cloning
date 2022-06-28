import styled from "@emotion/styled";
import React from "react";

const resposive = {
  xs: "70%",
  sm: "75%",
  md: "80%",
  lg: "85%",
  xl: "90%",
  desktop: "95%",
  full: "100%",
};

function Container({ maxWidth = "lg", css, children }) {
  const Block = styled("div")(({ theme }) => ({
    width: resposive[maxWidth],
    margin: "auto",
    ...css,
  }));
  return <Block>{children}</Block>;
}

export default Container;

import styled from "@emotion/styled";
import React, { forwardRef } from "react";

const resposive = {
  xs: "70%",
  sm: "75%",
  md: "80%",
  lg: "85%",
  xl: "90%",
  desktop: "95%",
  full: "100%",
};

const Container = forwardRef(
  ({ maxWidth = "lg", css, style, children }, ref) => {
    const Block = styled("div")(({ theme }) => ({
      width: resposive[maxWidth],
      marginLeft: "auto",
      marginRight: "auto",
      ...css,
      ...style,
    }));
    return <Block ref={ref}>{children}</Block>;
  }
);

export default Container;

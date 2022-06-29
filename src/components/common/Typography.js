import styled from "@emotion/styled";
import React from "react";

const type = {
  h1: {
    fontSize: 14,
  },
};

function Typography({ variant, component, style, children }) {
  const Block = styled(component || "div")`
    ${type[variant]}
  `;
  return <Block style={style}>{children}</Block>;
}

export default Typography;

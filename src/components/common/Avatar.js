import styled from "@emotion/styled";
import React from "react";

const frame = {
  rounded: "5px",
  circular: "50%",
  rectangle: "0px",
};

function Avatar({ size, shape, outline, src, alt = "sample" }) {
  const Block = styled(src ? "img" : "div")`
    width: ${size}px;
    height: ${size}px;
    border: 1px solid white;
    background-color: ${({ theme }) => theme.palette.gray};
    ${({ theme }) => ({ borderRadius: frame[shape] })};
    ${({ theme }) => outline && { border: `1px solid ${theme.palette.gray}` }};
  `;
  return <Block src={src} alt={alt} />;
}

export default Avatar;

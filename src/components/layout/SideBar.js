import styled from "@emotion/styled";
import React from "react";

function SideBar() {
  const Block = styled("div")(({ theme }) => ({
    width: '100%',
    maxWidth: 300,
    background: "red",
  }));
  return <Block></Block>;
}

export default SideBar;

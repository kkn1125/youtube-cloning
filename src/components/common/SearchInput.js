import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";

function SearchInput() {
  const Block = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));
  return <Block>
    <input type="text" />
    <Button variant={"rect"} color={"gray"}>
      Search
    </Button>
  </Block>;
}

export default SearchInput;

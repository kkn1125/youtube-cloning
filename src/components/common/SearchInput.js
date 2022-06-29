/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import { ReactComponent as SearchIcon } from "@Static/svg/searchIcon.svg";
import { css } from "@emotion/react";
import { ReactComponent as RecordIcon } from "@Static/svg/recordIcon.svg";

function SearchInput() {
  const Block = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Block>
      <form
        onSubmit={handleSubmit}
        css={css`
          width: 525px;
        `}>
        <CustomInput
          type='text'
          placeholder={"검색"}
          style={{
            fontSize: 15,
            paddingLeft: 10,
          }}
        />
      </form>
      <Button
        variant={"rect"}
        color={"gray"}
        style={{ width: 64, textAlign: "center" }}>
        <SearchIcon width={24} height={24} />
      </Button>
      <Button
        color={"gray"}
        variant={"circle"}
        size={"large"}
        style={{
          marginLeft: 5,
        }}>
        <RecordIcon width={24} height={24} />
      </Button>
    </Block>
  );
}

const CustomInput = styled("input")(({ theme }) => ({
  border: "none",
  height: "100%",
  width: "100%",
  padding: 0,
  border: `1px solid ${theme.palette.gray}`,
  boxSizing: "border-box",
}));

export default SearchInput;

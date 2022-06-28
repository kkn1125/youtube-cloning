import styled from "@emotion/styled";
import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import SearchInput from "../common/SearchInput";
// import Badge from "../common/Badge";
// import Button from "../common/Button";
// import Container from "../common/Container";
// import SearchInput from "../common/SearchInput";
import Badge from "../common/Badge";
import { ReactComponent as RecordIcon } from "@Static/svg/recordIcon.svg";

const Brand = ({ brand }) => <div>{brand}</div>;
const Hamburg = () => <div>icon</div>;

function Header({ brand }) {
  const Block = styled("div")(({ theme }) => ({
    // ...
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  }));
  const ButtonBlock = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
  }));
  return (
    <Container>
      <Block>
        <ButtonBlock>
          <Hamburg />
          <Brand brand={brand} />
        </ButtonBlock>
        <SearchInput />
        <div>
          <Button color={"danger"} variant={"circle"} size={"large"}>
            <RecordIcon width='20' height='20' />
          </Button>
          <Button color={"danger"} variant={"circle"} size={"normal"}>
            +
          </Button>
          <Button color={"danger"} variant={"circle"} size={"small"}>
            +
          </Button>
          <Button>+</Button>
          <Button>✳️</Button>
          <Button>bell</Button>
          <Button>profile</Button>
        </div>
      </Block>
      <Block>
        <Badge color={"secondary"} variant={"circle"} size={"small"}>
          test
        </Badge>
      </Block>
    </Container>
  );
}

export default Header;

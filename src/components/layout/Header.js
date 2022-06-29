/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import SearchInput from "../common/SearchInput";
import Badge from "../common/Badge";
import { ReactComponent as YouTubeIcon } from "@Static/svg/youtubeIcon.svg";
import { ReactComponent as HamburgIcon } from "@Static/svg/hamburgIcon.svg";
import { ReactComponent as PlusRecordIcon } from "@Static/svg/plusRecordIcon.svg";
import { ReactComponent as DotRectIcon } from "@Static/svg/dotRectIcon.svg";
import { ReactComponent as BellIcon } from "@Static/svg/bellIcon.svg";
import { css } from "@emotion/react";
import Avatar from "../common/Avatar";

function Header({ brand }) {
  return (
    <Container
      maxWidth={"full"}
      style={{
        padding: 3,
      }}>
      <Block
        style={{
          paddingLeft: 20,
          paddingRight: 30,
        }}>
        <ButtonBlock
          style={{
            gap: 20,
          }}>
          <Hamburg />
          <Brand brand={brand} />
        </ButtonBlock>
        <SearchInput />
        <div
          css={css`
            display: flex;
            align-items: center;
          `}>
          <Button color={"ghost"} variant={"circle"} size={"large"}>
            <PlusRecordIcon
              width={24}
              height={24}
              css={css`
                width: 150px;
              `}
            />
          </Button>
          <Button color={"ghost"} variant={"circle"} size={"large"}>
            <DotRectIcon width={24} height={24} />
          </Button>
          <Button color={"ghost"} variant={"circle"} size={"large"}>
            <BellIcon width={24} height={24} />
          </Button>
          <Avatar
            size={30}
            src={
              "https://yt3.ggpht.com/yti/APfAmoGpvlZYfkjKz9m3SpS5ydljRKx6rLV3E2pSEUVq2A=s88-c-k-c0x00ffffff-no-rj-mo"
            }
          />
        </div>
      </Block>
    </Container>
  );
}

export const Block = styled("div")(({ css, style, theme }) => ({
  // ...
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  paddingRight: 5,
  alignItems: "center",
  ...css,
  ...style,
}));

const ButtonBlock = styled("div")(({ style, theme }) => ({
  display: "flex",
  flexDirection: "row",
  ...style,
}));

const Brand = ({ brand }) => (
  <div>
    <YouTubeIcon width={100} height={20} />
  </div>
);

const Hamburg = () => (
  <div>
    <HamburgIcon width={23} height={23} />
  </div>
);

export default Header;

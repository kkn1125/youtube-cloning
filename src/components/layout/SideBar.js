/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useState } from "react";
import { ReactComponent as SubscribeIcon } from "@Static/svg/subscribeIcon.svg";
import { ReactComponent as ShortsIcon } from "@Static/svg/shortsIcon.svg";
import { ReactComponent as SearchIcon2 } from "@Static/svg/searchIcon2.svg";
import { css } from "@emotion/react";
import Avatar from "../common/Avatar";

const menuList = [
  {
    category: "main",
    name: "홈",
    icon: <SubscribeIcon />,
  },
  {
    category: "main",
    name: "탐색",
    icon: <SearchIcon2 />,
  },
  {
    category: "main",
    name: "Shorts",
    icon: <ShortsIcon />,
  },
  {
    category: "main",
    name: "구독",
  },
];

const subMenuList = [
  {
    category: "main",
    name: "보관함",
  },
  {
    category: "main",
    name: "시청 기록",
  },
  {
    category: "main",
    name: "내 동영상",
  },
  {
    category: "main",
    name: "나중에 볼 동영상",
  },
  {
    category: "main",
    name: "좋아요 표시한 동영상",
  },
  {
    category: "main",
    name: "더보기",
  },
];

const subscribeList = [
  {
    category: "",
    name: "나무소리",
    icon: "",
  },
  {
    category: "",
    name: "코딩앙마",
    icon: "",
  },
  {
    category: "",
    name: "FE Roy",
    icon: "",
  },
  {
    category: "",
    name: "브론즈연합회",
    icon: "",
  },
  {
    category: "",
    name: "코딩애플",
    icon: "",
  },
  {
    category: "",
    name: "별코딩",
    icon: "",
  },
  {
    category: "",
    name: "생활코딩",
    icon: "",
  },
  {
    category: "",
    name: "46개 더보기",
    icon: "",
  },
];

function SideBar() {
  const Block = styled("div")(({ theme }) => ({
    maxWidth: 240,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    position: "fixed",
    height: "100vh",
    background: "white",
    zIndex: 5,
    "&::-webkit-scrollbar": {
      background: "none",
      width: "18px",
      height: "18px",
      pointerEvents: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "18px",
      border: "5px solid white",
      backgroundClip: "content-box",
      background: "#00000000",
      width: "18px",
      height: "18px",
      pointerEvents: "none",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      background: `#00000055`,
    },
  }));

  return (
    <Block>
      <ListWrap>
        {menuList.map((menu, idx) => (
          <List key={menu.name + idx}>
            {menu.icon && (
              <span
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 24,
                }}>
                {menu.icon}
              </span>
            )}
            {menu.name}
          </List>
        ))}
      </ListWrap>
      <hr
        style={{
          width: "100%",
          background: "#99999955",
          border: "none",
          height: "1px",
        }}
      />
      <ListWrap>
        {subMenuList.map((menu) => (
          <List key={menu.name}>{menu.name}</List>
        ))}
      </ListWrap>
      <hr
        style={{
          width: "100%",
          background: "#99999955",
          border: "none",
          height: "1px",
        }}
      />
      <List>구독</List>
      <ListWrap>
        {subscribeList.map((menu) => (
          <List key={menu.name}>
            {true && <Avatar src={""} />}
            {menu.name}
          </List>
        ))}
      </ListWrap>
    </Block>
  );
}

const ListWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 12,
  paddingBottom: 12,
}));

const List = styled("div")(({ theme }) => ({
  paddingLeft: 24,
  paddingRight: 24,
  fontSize: "1.4rem",
  lineHeight: "4rem",
  fontWeight: 400,
  display: "inline-flex",
  alignItems: "center",
  gap: 25,
  backgroundColor: "white",
  "&:hover": {
    filter: "brightness(90%)",
  },
}));

export default SideBar;

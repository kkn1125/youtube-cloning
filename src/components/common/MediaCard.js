/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import MediaBox from "./MediaBox";
import Typography from "./Typography";
import { ReactComponent as DotMenuIcon } from "@Static/svg/dotMenuIcon.svg";
import { css, jsx } from "@emotion/react";

function MediaCard({ title, src, author, avatar, view, timestamp }) {
  const [overMouse, setOverMouse] = useState(false);
  const handleOverMouse = () => {
    setOverMouse(true);
  };
  const handleLeaveMouse = () => {
    setOverMouse(false);
  };
  return (
    <Block onMouseEnter={handleOverMouse} onMouseLeave={handleLeaveMouse}>
      <MediaBox src={src} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          gap: 8,
        }}>
        <Avatar src={avatar} />
        <div
          style={{
            paddingRight: 25,
            display: "flex",
            flexDirection: "column",
          }}>
          <Typography
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              maxHeight: "4.4rem",
              lineHeight: "2.2rem",
              overflow: "hidden",
              whiteSpace: "normal",
              fontFamily: '"roboto"',
              textOverflow: "ellipsis",
              display: "block",
              WebkitLineClamp: 2,
              display: "box",
              display: "-webkit-box",
            }}>
            {title}
          </Typography>
          <Typography
            style={{
              fontFamily: '"Roboto","Arial",sans-serif',
              fontSize: "1.4rem",
              lineHeight: "2rem",
              fontWeight: 400,
              color: "#606060",
            }}>
            {author}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <Typography
              component='span'
              style={{
                fontFamily: '"Roboto","Arial",sans-serif',
                fontSize: "1.4rem",
                lineHeight: "2rem",
                fontWeight: 400,
                color: "#606060",
              }}>
              {view}
            </Typography>
            {timestamp && (
              <>
                <Typography
                  component='span'
                  style={{
                    width: 3,
                    height: 3,
                    background: "gray",
                    borderRadius: 3,
                    marginBottom: 3,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                />
                <Typography
                  component='span'
                  style={{
                    fontFamily: '"Roboto","Arial",sans-serif',
                    fontSize: "1.4rem",
                    lineHeight: "2rem",
                    fontWeight: 400,
                    color: "#606060",
                  }}>
                  {timestamp}
                </Typography>
              </>
            )}
          </div>
        </div>
        <Button
          color={"ghost"}
          style={{
            position: "absolute",
            top: 7,
            right: -10,
          }}>
          {overMouse && <DotMenuIcon width={24} height={24} />}
        </Button>
      </div>
    </Block>
  );
}

const Block = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 360,
}));

export default MediaCard;

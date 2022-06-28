import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Avatar from "./components/common/Avatar";
import Container from "./components/common/Container";
import Typography from "./components/common/Typography";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import MediaBox from "./components/MediaBox";
import { convertCss } from "./utils/tools";

function App() {
  return (
    <Container
      maxWidth={"full"}
      css={css`
        display: flex;
        flex-direction: column;
        background: grey;
      `}>
      <Header brand={"kimtube"} />
      <Container
        css={css`
        `}>
        <SideBar menuList={[]} />
        <MediaBox />
        <Avatar
          size={48}
          shape='circular'
          src='https://lh3.googleusercontent.com/ogw/ADea4I55DKaBW9Mv-YbchLYwqmL50WVGXqAf8v7WQ5dbmg=s32-c-mo'
        />
        <Typography>test</Typography>
      </Container>
    </Container>
  );
}

export default App;

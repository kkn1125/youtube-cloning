import { useTheme } from "@emotion/react";
import Avatar from "./components/common/Avatar";
import Typography from "./components/common/Typography";
import MediaBox from "./components/MediaBox";
import { convertCss } from "./utils/tools";

function App() {
  const theme = useTheme();
  console.log(
    convertCss({
      textColor: "test",
    })
  );
  return (
    <div>
      <header>
        test
        <MediaBox />
        <Avatar
          size={48}
          shape='circular'
          src='https://lh3.googleusercontent.com/ogw/ADea4I55DKaBW9Mv-YbchLYwqmL50WVGXqAf8v7WQ5dbmg=s32-c-mo'
        />
        <Typography>test</Typography>
      </header>
    </div>
  );
}

export default App;

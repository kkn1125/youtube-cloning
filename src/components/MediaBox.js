import React from "react";
import Box from "./common/Box";

const initialSize = {
  width: 360,
  height: 200,
};

function MediaBox({
  width = initialSize.width,
  height = initialSize.height,
  src,
  children,
}) {
  return <Box width={width} height={height} src={src} children={children} />;
}

export default MediaBox;

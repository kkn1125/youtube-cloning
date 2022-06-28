import styling from "@emotion/styled";

export const convertCss = (styleObj) =>
  Object.fromEntries(
    Object.entries(styleObj).map(([k, v]) => {
      console.log(styleObj);
      return [
        k.replace(/[A-Z]+/g, ($1) => "-" + $1.toLowerCase()),
        !isNaN(v) ? parseInt(v) : v,
      ];
    })
  );

export const contrastColor = {
  primary: true,
  info: true,
  secondary: true,
  danger: true,
  warning: false,
  white: false,
  dark: true,
  gray: false,
  ghost: false,
};

export const SIZE = new (function SIZE() {})();
SIZE[(SIZE["small"] = 13 / 16)] = "small";
SIZE[(SIZE["normal"] = 16 / 16)] = "normal";
SIZE[(SIZE["large"] = 22 / 16)] = "large";

export const SHAPE = new (function SHAPE() {})();
SHAPE[(SHAPE["rect"] = 0)] = "rect";
SHAPE[(SHAPE["circle"] = 100)] = "circle";
SHAPE[(SHAPE["rounded"] = 5)] = "rounded";

export const replaceSize = (size) => (SIZE[size] === undefined ? "normal" : size);

export const parsedStyle = (color, size, variant, theme) => ({
  fontSize: 16 * SIZE[replaceSize(size)],
  border: "none",
  outline: "none",
  background: "none",
  backgroundColor: theme.palette[color],
  color: theme.palette[contrastColor[color] ? "white" : "dark"],
  borderRadius: SHAPE[variant],
  padding: `${SIZE[replaceSize(size)] * 5}px ${SIZE[replaceSize(size)] * 10}px`,
  
});

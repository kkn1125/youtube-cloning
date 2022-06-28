export const convertCss = (styles) =>
  Object.entries(styles).map(([k, v]) =>
    k.replace(/[A-Z]+/g, ($1) => "-" + $1.toLowerCase(), v.match(/[0-9]+/))
  );

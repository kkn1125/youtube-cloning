import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createCache from "@emotion/cache";
import { CacheProvider, jsx, css, ThemeProvider } from "@emotion/react";

const key = "custom";
const cache = createCache({ key });

const theme = {
  palette: {
    primary: "#8434ed",
    secondary: "#707070",
    info: "#3498ed",
    success: "#34ed6d",
    warning: "#edbd34",
    danger: "#ed3456",
    white: "#ffffff",
    dark: "#2a2a2a",
    gray: "#ebebeb",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

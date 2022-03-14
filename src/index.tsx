import React from "react";
import ReactDOM from "react-dom";
import "focus-visible";

import "normalize.css";
import "./styles/global.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
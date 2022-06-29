import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";

import { Feed } from "./pages/Main";

ReactDOM.render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
  document.getElementById("root")
);

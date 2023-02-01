import "./main.css";
import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import Abc from "./Abc";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Abc />
);

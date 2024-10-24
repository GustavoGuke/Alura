import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { registerSW } from "./registerSW";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//registerSW();
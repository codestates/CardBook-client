import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { BrowserRouter } from "react-router-dom";
import Cursor from "components/Cursor";

ReactDOM.render(
  <BrowserRouter>
    <Cursor />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

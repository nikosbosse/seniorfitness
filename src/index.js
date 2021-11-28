import { React, StrictMode } from "react";
import ReactDOM from "react-dom";

import {Video} from "./App";
import {SelectURL} from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SelectURL />
    <Video />
  </StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  { id: `todo-${nanoid()}`, name: "Eat", completed: true },
  { id: `todo-${nanoid()}`, name: "Sleep", completed: false },
  { id: `todo-${nanoid()}`, name: "Repeat", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import { createRoot } from "react-dom/client";
import AppWrapper from "./AppWrapper";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

createRoot(document.getElementById("root")).render(<AppWrapper />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./store/reducer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

reportWebVitals();

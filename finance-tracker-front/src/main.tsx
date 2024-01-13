import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { GlobaStyle } from "./styles.ts";
// import { Tester } from "./pages/Tester/index.tsx";
import { Category } from "./pages/Category/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobaStyle />
    <Category />
  </React.StrictMode>
);

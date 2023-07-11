import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextWrapper from "./contexts/ThemeContextWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextWrapper>
  </React.StrictMode>
);

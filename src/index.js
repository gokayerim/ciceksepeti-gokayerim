import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CSThemeProvider from "./utils/CSThemeProvider";
import { ProductProvider } from "./utils/hooks/useProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CSThemeProvider>
        <App />
      </CSThemeProvider>
    </ProductProvider>
  </React.StrictMode>
);

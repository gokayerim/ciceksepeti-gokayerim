import React from "react";
import { CartProvider } from "./utils/hooks/useCartContext";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CSThemeProvider from "./utils/CSThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <CSThemeProvider>
        <App />
      </CSThemeProvider>
    </CartProvider>
  </React.StrictMode>
);

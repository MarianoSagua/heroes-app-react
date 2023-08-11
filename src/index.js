import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </AuthProvider>

  // </React.StrictMode>
);

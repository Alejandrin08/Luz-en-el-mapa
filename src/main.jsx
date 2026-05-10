import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Index from "./pages/Index.jsx";
import Configura from "./pages/Configura.jsx";
import Historia from "./pages/Historia.jsx";
import Nacional from "./pages/Nacional.jsx";
import Recursos from "./pages/Recursos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/configura" element={<Configura />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/nacional" element={<Nacional />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

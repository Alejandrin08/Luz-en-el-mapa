import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import { StoryProvider } from "./context/StoryContext.jsx";

import Index from "./pages/Index.jsx";
import Configura from "./pages/Configura.jsx";
import HistoriaUno from "./pages/HistoriaUno.jsx";
import HistoriaDos from "./pages/HistoriaDos.jsx";
import HistoriaTres from "./pages/HistoriaTres.jsx";
import HistoriaCuatro from "./pages/HistoriaCuatro.jsx";
import Nacional from "./pages/Nacional.jsx";
import Recursos from "./pages/Recursos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/configura" element={<Configura />} />
          <Route path="/historiaUno" element={<HistoriaUno />} />
          <Route path="/historiaDos" element={<HistoriaDos />} />
          <Route path="/historiaTres" element={<HistoriaTres />} />
          <Route path="/historiaCuatro" element={<HistoriaCuatro />} />
          <Route path="/mapa" element={<Nacional />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </BrowserRouter>
    </StoryProvider>
);
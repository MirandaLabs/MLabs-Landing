import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages/landing_page/App";
import { AboutPage } from "./pages/about/page";
import { ContactPage } from "./pages/contact/page";
export function AppRouter() {
  return <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>;
}
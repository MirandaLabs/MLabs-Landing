import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages/landing_page/App";
import { AboutPage } from "./pages/about/page";
import { ContactPage } from "./pages/contact/page";
import { CaseDetailsPage } from "./pages/case-details/page";

export function AppRouter() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/case/:id" element={<CaseDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
import "./global.css";

import { RootLayout } from "@/components/layout/root-layout";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudyPlaceholder from "./pages/CaseStudyPlaceholder";
import Index from "./pages/Index";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="*" element={<CaseStudyPlaceholder />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

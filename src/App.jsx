import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<CreatePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

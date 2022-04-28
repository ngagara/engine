import { Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage/BooksPage";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<CompanyPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

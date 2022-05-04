import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import BooksPage from "./pages/BooksPage/BooksPage";
import EditPage from "./pages/EditPage/EditPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import { SIDEBAR_MENU } from "./constants";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>NOLOG</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:id/*" element={<EditPage />}>
          {SIDEBAR_MENU &&
            SIDEBAR_MENU.map((route) =>
              route.path === "" ? (
                <Route path="*" element={<NotFound />} />
              ) : (
                <Route key={route.id} path={route.path} element={route.component} />
              )
            )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


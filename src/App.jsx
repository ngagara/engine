import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "./pages/AppLayout";
import BooksPage from "./pages/BooksPage/BooksPage";
import EditPage from "./pages/EditPage/EditPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { SIDEBAR_MENU } from "./constants";

export default function App() {

  const login = useSelector((state) => state.auth.login);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute isLogin={login} />}>
        <Route element={<AppLayout />}>
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:id/*" element={<EditPage />}>
            {SIDEBAR_MENU &&
              SIDEBAR_MENU.map((route) =>
                route.path === "" ? (
                  <Route path="*" key={route.id} element={<NotFound />} />
                ) : (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.component}
                  />
                )
              )}
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

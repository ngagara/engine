import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout, BooksPage, EditPage, LoginPage, NotFound, ProtectedRoute } from "./pages";
import { SIDEBAR_MENU } from "./routs";

export default function App() {

  const login = useSelector((state) => state.auth.login);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute isLogin={login} />}>
        <Route element={<AppLayout />}>
          <Route path="books" element={<BooksPage />} />
          <Route path="users" element={<BooksPage />} />
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

import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isLogin }) => {

  if (!isLogin) return <Navigate to="/" replace />;

  return <Outlet />;
};
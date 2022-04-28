import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

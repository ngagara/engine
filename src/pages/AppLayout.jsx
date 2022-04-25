import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "../components/Header/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      {/* <footer>Copyright 2022</footer> */}
    </>
  );
}

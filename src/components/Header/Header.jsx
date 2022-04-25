import RootLogo from "../Header/parts/RootLogo";
import HeaderMenu from "../Header/parts/HeaderMenu";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <RootLogo />
          <HeaderMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

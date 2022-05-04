import { LogoIcon } from "../../img/icons";
import { Container } from "../../ui-kit";
import Tabs from "./parts/Tabs";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <LogoIcon />
        </div>
        <Tabs />
      </Container>
    </header>
  );
}

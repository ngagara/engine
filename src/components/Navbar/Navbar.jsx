import { LogoIcon } from "../../vendor/icons";
import { Container } from "../../ui-kit";
import Tabs from "./parts/Tabs";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.logoContainer}>
          <LogoIcon />
        </div>
        <Tabs />
      </Container>
    </header>
  );
}

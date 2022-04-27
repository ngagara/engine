import { LogoIcon } from "../../vendor/icons";
import { Container } from "../../ui-kit";
import Tabs from "./parts/Tabs";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logoContainer}>
          <LogoIcon />
        </div>
        <Tabs />
      </Container>
    </header>
  );
}

import { LogoIcon } from "../../vendor/icons/LogoIcon";
import Tabs from "./parts/Tabs";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <LogoIcon />
      </div>
      <Tabs />
    </header>
  );
}

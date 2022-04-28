import Tab from "./Tab";
import styles from "./Tabs.module.scss";
import { MENU } from "../../../constants";

const Tabs = () => {
  return (
    <ul className={styles.tabs}>
      {MENU &&
        MENU.map((link) => (
          <li key={link.id}>
            <Tab link={link.link} name={link.name} />
          </li>
        ))}
    </ul>
  );
};

export default Tabs;

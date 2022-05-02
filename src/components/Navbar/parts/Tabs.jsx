import Tab from "./Tab";
import styles from "./Tabs.module.scss";
import { NAV_MENU } from "../../../constants";

const Tabs = () => {
  return (
    <ul className={styles.tabs}>
      {NAV_MENU &&
        NAV_MENU.map((link) => (
          <li key={link.id}>
            <Tab link={link.link} name={link.name} />
          </li>
        ))}
    </ul>
  );
};

export default Tabs;

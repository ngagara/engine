import Tab from "./Tab";
import styles from "./Tabs.module.scss";
import { MENU } from "../../../constants";

const Tabs = () => {
  return (
    <ul className={styles.tabs}>
      {MENU &&
        MENU.map((link) => (
          <Tab key={link.id} link={link.link} name={link.name} />
        ))}
    </ul>
  );
};

export default Tabs;

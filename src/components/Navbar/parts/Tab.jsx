import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.scss";

const setActive = ({ isActive }) =>
  isActive ? `${styles.tab} ${styles.tabActive}` : `${styles.tab}`;

const Tab = ({ key, name, link }) => {
  return (
    <NavLink className={setActive} to={link} key={key}>
      {name}
    </NavLink>
  );
};

export default Tab;

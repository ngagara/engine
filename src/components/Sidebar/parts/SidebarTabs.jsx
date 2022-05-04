import React from "react";
import SidebarTab from "./SidebarTab";
import styles from "../Sidebar.module.scss";
import { SIDEBAR_MENU } from "../../../constants";

const SidebarTabs = () => {
  return (
    <ul className={styles.tabs}>
      {SIDEBAR_MENU &&
        SIDEBAR_MENU.map((link) => (
          <li key={link.id}>
            <SidebarTab
              link={link.path}
              icon={link.icon}
              name={link.name}
              disabled={link.disabled}
            />
          </li>
        ))}
    </ul>
  );
};

export default SidebarTabs;

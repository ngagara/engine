import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./SidebarTabs.module.scss";

const setActive = ({ isActive }) => isActive ? `${styles.tab} ${styles.tabActive}` : `${styles.tab}`;

const SidebarTabs = ({ name, link, icon }) => {
    return (
        <NavLink className={setActive} to={link} >
            {icon}
            <p className={styles.tabText}>{name}</p>
        </NavLink>
    )
}

export default SidebarTabs
import React from 'react';
import SidebarTab from './SidebarTab'
import styles from "./SidebarTabs.module.scss";
import { SIDEBAR_MENU } from '../../../constants';

const SidebarTabs = () => {

    return (
        <ul className={styles.tabs} >
            {SIDEBAR_MENU &&
                SIDEBAR_MENU.map(link => (
                    <li key={link.id}>
                        <SidebarTab link={link.link} icon={link.icon} name={link.name} />
                    </li>
                ))}
        </ul>
    )
}

export default SidebarTabs

import React from 'react'
import { ReloadIcon } from '../../../../img/icons';
import styles from "./SidebarHeader.module.scss";

const SidebarHeader = ({ name }) => {
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.reload}>
                <ReloadIcon className={styles.reloadIcon} />
                <span className={styles.reloadTime}>12:25</span>
                <span className={styles.reloadDate}>14.04.22</span>
            </div>
        </div>
    )
}

export default SidebarHeader

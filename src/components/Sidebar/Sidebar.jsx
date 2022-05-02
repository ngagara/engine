import React from 'react';
import SidebarHeader from './parts/SidebarHeader/SidebarHeader';
import { Container } from './../../ui-kit/Container/Container';
import styles from "./Sidebar.module.scss";
import SidebarTabs from './parts/SidebarTabs/SidebarTabs';

const Sidebar = ({ name }) => {
    return (
        <div className={styles.sidebar}>
            <Container className={styles.sidebarHeader}>
                <SidebarHeader name={name} />
            </Container>
            <Container className={styles.sidebarTabs}>
                <SidebarTabs />
            </Container>
        </div>
    )
}

export default Sidebar
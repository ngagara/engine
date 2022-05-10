import styles from "./SectionContainer.module.scss";

export const SectionContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.root}>
                {children}
            </div>
        </div>
    )
}

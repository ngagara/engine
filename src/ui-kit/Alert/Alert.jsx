import styles from "./Alert.module.scss";
import { AlertIcon } from "../../img/icons";


export const Alert = ({ text, red, className }) => {
    return (
        <div className={`${styles.alert} ${className}`}>
            <AlertIcon />
            <p className={styles.text}>{text}</p>
        </div>
    );
};

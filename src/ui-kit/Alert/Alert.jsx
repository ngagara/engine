import classNames from "classnames";
import styles from "./Alert.module.scss";
import { AlertIcon } from "../../img/icons";

export const Alert = ({ text, normalText, className }) => {
  return (
    <div className={classNames(styles.alert, { [className]: className })}>
      <div className={styles.alrtIcon}>
        <AlertIcon />
      </div>
      <p
        className={classNames(styles.alertText, {
          [styles.alertTextNormal]: normalText
        })}
      >
        {text}
      </p>
    </div>
  );
};

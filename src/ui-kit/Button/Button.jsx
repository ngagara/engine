import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ children, disabled, bgWhite, onClick }) => {
  return (
    <button
      type="button"
      className={classNames(styles.btn, { [styles.btnWhite]: bgWhite })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

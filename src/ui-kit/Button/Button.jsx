import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ children, disabled, bgWhite, onClick, className }) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.btn,
        { [styles.btnWhite]: bgWhite },
        { [className]: className }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

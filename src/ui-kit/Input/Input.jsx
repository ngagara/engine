import classNames from "classnames";
import styles from "./Input.module.scss";

export const Input = ({ label, type, disabled, className }) => {
  return (
    <div className={classNames(styles.root, { [className]: className })}>
      <label htmlFor={label}>{label && label}</label>
      <input
        id={label}
        type={type}
        className={styles.input}
        placeholder={"-"}
        // pattern="[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?"
        disabled={disabled}
      />
    </div>
  );
};

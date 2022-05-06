import classNames from "classnames";
import styles from "./Input.module.scss";

export const Input = ({ ...props }) => {
  const {
    name,
    label,
    type,
    disabled,
    className,
    register,
    required,
    error
  } = props;

  return (
    <div className={classNames(styles.root, { [className]: className })}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type={type}
        className={styles.input}
        placeholder={"-"}
        required={error}
        {...register(name, { required })}
        disabled={disabled}
      />
    </div>
  );
};

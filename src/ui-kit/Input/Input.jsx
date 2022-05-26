import classNames from "classnames";
import styles from "./Input.module.scss";

export const Input = ({ ...props }) => {
  const {
    label,
    type,
    disabled,
    className,
    register,
    name,
    required,
    invalid,
    placeholder
  } = props;

  return (
    <div className={classNames(styles.root, { [className]: className })}>
      {label && <label>{label}</label>}
      {type === "file" ? (
        <label htmlFor={name} className={styles.file} data-text={"-"}>
          <input
            id={name}
            type={type}
            className={classNames(styles.input, {
              [styles.inputInvalid]: invalid
            })}
            placeholder={placeholder ? placeholder : "-"}
            disabled={disabled}
            required={required}
            {...register}
          />
        </label>
      ) : (
        <input
          id={name}
          type={type}
          className={classNames(styles.input, {
            [styles.inputInvalid]: invalid
          })}
          placeholder={placeholder ? placeholder : "-"}
          disabled={disabled}
          required={required}
          {...register}
        />
      )}
    </div>
  );
};

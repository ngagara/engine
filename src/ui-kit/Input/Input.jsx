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
    readOnly,
    placeholder
  } = props;

  return (
    <div className={classNames(styles.root, { [className]: className })}>
      {label && <label>{label}</label>}
      <input
        id={name}
        type={type}
        className={classNames(styles.input, {
          [styles.inputInvalid]: invalid
        })}
        placeholder={placeholder ? placeholder : "-"}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        {...register}
      />
    </div>
  );
};

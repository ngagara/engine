import classNames from "classnames";
import { useForm } from "react-hook-form";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ label, checked, name, disabled }) => {
  const { register } = useForm();
  return (
    <div className={styles.checkbox}>
      <input
        id={name}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        value={name}
        className={styles.checkboxInput}
        {...register("checkbox")}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

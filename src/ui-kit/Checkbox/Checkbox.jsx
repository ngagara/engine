import { useForm } from "react-hook-form";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ label, checked, name, disabled }) => {
  const { register } = useForm();
  return (
    <div className={styles.checkbox}>
      <label htmlFor={name}></label>
      <input
        id={name}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        value={name}
        className={styles.checkboxInput}
        {...register("checkbox")}
      />
      {label && (
        <label className={styles.checkboxLabel} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};

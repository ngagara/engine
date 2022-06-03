import styles from "./Checkbox.module.scss";

export const Checkbox = ({ label, checked, name, register, disabled }) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={name}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        value={name}
        className={styles.checkboxInput}
        {...register}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

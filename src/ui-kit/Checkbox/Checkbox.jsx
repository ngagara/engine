import styles from "./Checkbox.module.scss";

export const Checkbox = ({ value, checked, register, disabled }) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={value}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        value={value}
        name={value}
        className={styles.checkboxInput}
        {...register}
      />
      {value && <label htmlFor={value}>{value}</label>}
    </div>
  );
};

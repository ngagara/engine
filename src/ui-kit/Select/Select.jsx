import styles from "./Select.module.scss";

export const Select = ({ label, options, disabled }) => {
  return (
    <label className={styles.select} htmlFor="slct">
      {label && <label>{label}</label>}
      <select id="slct" required="required" disabled={disabled}>
        <option defaultValue="#" selected="selected">
          One
        </option>
        <option defaultValue="#">Two</option>
        <option defaultValue="#">Three</option>
      </select>
    </label>
  );
};

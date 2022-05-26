import styles from "./Select.module.scss";

export const Select = ({ label, options, disabled }) => {
  return (
    <div className={styles.select}>
      {label && <label htmlFor="slct">{label}</label>}
      <select id="slct" required="required" disabled={disabled}>
        <option defaultValue="#" selected="selected">
          <span>312</span>
        </option>
        <option defaultValue="#">
          <span>123</span>
        </option>
        <option defaultValue="#">
          <span>123</span>
        </option>
      </select>
    </div>
  );
};

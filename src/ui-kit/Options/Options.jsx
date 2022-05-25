import styles from "./Options.module.scss";

export const Options = () => {
  return (
    <label className={styles.select} for="slct">
      <select id="slct" required="required">
        <option value="" disabled="disabled" selected="selected">
          Select option
        </option>
        <option value="#">One</option>
        <option value="#">Two</option>
        <option value="#">Three</option>
        <option value="#">Four</option>
        <option value="#">Five</option>
        <option value="#">Six</option>
        <option value="#">Seven</option>
      </select>
      <svg>
        <use xlinkHref="#select-arrow-down"></use>
      </svg>
    </label>
  );
};

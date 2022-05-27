import { useState } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

export const Select = ({ label, options, disabled }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  return (
    <div onClick={toggleOptions} className={styles.select}>
      {label && <label>{label}</label>}
      <button
        disabled={disabled}
        type="button"
        className={classNames(styles.selectButton, {
          [styles.selectButtonExpanden]: isOptionsOpen
        })}
      >
        {options[selectedOption]}
      </button>
      <div
        className={classNames(styles.selectControl, {
          [styles.selectControlActive]: isOptionsOpen
        })}
      ></div>
      <ul
        className={classNames(styles.selectOptions, {
          [styles.selectOptionsShow]: isOptionsOpen
        })}
      >
        {options &&
          options.map((option, index) => (
            <li
              className={styles.selectOption}
              id={option}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

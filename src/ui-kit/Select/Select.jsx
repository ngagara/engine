import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

export const Select = ({ label, options, disabled, className }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) =>
      ref.current.contains(e.target) || setIsOptionsOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  return (
    <div
      ref={ref}
      onClick={toggleOptions}
      className={classNames(styles.select, { [className]: className })}
    >
      {label && <label>{label}</label>}
      <div
        className={classNames(styles.selectContainer, {
          [styles.selectContainerDisabled]: disabled
        })}
      >
        <button
          disabled={disabled}
          type="button"
          className={styles.selectButton}
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
                className={classNames(styles.selectOption, {
                  [styles.selectOptionSelected]: index === selectedOption
                })}
                id={option}
                key={index}
                onClick={() => {
                  setSelectedThenCloseDropdown(index);
                }}
              >
                {option}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

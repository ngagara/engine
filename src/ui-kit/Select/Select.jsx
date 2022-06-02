import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

export const Select = ({
  label,
  options,
  disabled,
  className,
  value,
  onChangeSelect
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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

  const setSelectedThenCloseDropdown = (label) => {
    setSelectedOption(label);
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
          {value}
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
            options.map((option) => (
              <li
                className={classNames(styles.selectOption, {
                  [styles.selectOptionSelected]: option.label === selectedOption
                })}
                key={option.value}
                value={option.value}
                onClick={() => setSelectedThenCloseDropdown(option.label)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

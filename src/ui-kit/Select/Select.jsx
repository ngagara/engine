import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

export const Select = ({
  labelSelect,
  options,
  disabled,
  className,
  selectedValue,
  onChangeOption,
  setDefaultLabel
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue);

  const ref = useRef(null);

  useEffect(() => {
    setSelectedOption(setDefaultLabel(selectedValue));
  }, [selectedValue]);

  useEffect(() => {
    const onClick = (e) =>
      ref.current.contains(e.target) || setIsOptionsOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (label, currentValue) => {
    setSelectedOption(label);
    setIsOptionsOpen(false);
    onChangeOption((selectedValue = currentValue));
  };

  return (
    <div
      ref={ref}
      onClick={toggleOptions}
      className={classNames(styles.select, { [className]: className })}
    >
      {labelSelect && <label>{labelSelect}</label>}
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
          {selectedOption}
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
                onClick={() =>
                  setSelectedThenCloseDropdown(option.label, option.value)
                }
              >
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

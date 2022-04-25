import "./index.scss";
import classNames from "classnames";

export default function Button({ value, disabled, bg }) {
  return (
    <button
      type="button"
      className={classNames("btn", { btnWhite: bg })}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

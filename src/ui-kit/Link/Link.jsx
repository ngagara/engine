import classNames from "classnames";
import styles from "./Link.module.scss";

export const Link = ({ text, className }) => {
  return (
    <a
      className={classNames(styles.link, { [className]: classNames })}
      target="_blank"
      href="'"
    >
      {text}
    </a>
  );
};

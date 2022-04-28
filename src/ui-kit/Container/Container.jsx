import classNames from "classnames";
import styles from "./Container.module.scss";

export const Container = ({ children, p30, plr30, ptb30 }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.containerPadding]: p30,
        [styles.PaddingLR]: plr30,
        [styles.PaddingTB]: ptb30
      })}
    >
      {children}
    </div>
  );
};

import classNames from "classnames";
import styles from "./Modal.module.scss";

export const Modal = ({ ...props }) => {
  const { children, active, setActive, subtitle, title, className } = props;
  return (
    <div
      className={classNames(styles.modal, {
        [styles.modalActive]: active
      })}
      onMouseDown={() => setActive(false)}
    >
      <div
        className={classNames(styles.root, { [className]: className })}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

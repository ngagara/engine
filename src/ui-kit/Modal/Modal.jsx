import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../store/supportSlice'
import classNames from "classnames";
import styles from "./Modal.module.scss";

export const Modal = ({ ...props }) => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.support.modalActive)

  const { children, component, subtitle, title, className } = props;
  return (
    <div
      className={classNames(styles.modal, {
        [styles.modalActive]: active
      })}
      onMouseDown={() => dispatch(setModalActive(false))}
    >
      <div
        className={classNames(styles.modalRoot, { [className]: className })}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalTitle}>{title}</h2>
        {subtitle && <p className={styles.modalSubtitle}>{subtitle}</p>}
        {component ? component : children}
      </div>
    </div>
  );
};

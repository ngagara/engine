import { useEffect } from "react";
import { hideToast } from "../../store/supportSlice";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../../img/icons";
import classNames from "classnames";
import styles from "./Toast.module.scss";

export const Toast = () => {
  const show = useSelector((state) => state.support.toast);
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.toast, {
        [styles.toastShow]: show
      })}
    >
      <p>{"Изменения сохранены"}</p>
      <div className={styles.icon} onClick={() => dispatch(hideToast())}>
        <CloseIcon />
      </div>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../../store/supportSlice";
import { TrashIcon } from "../../../../../img/icons";
import { Input, Modal, Button } from "../../../../../ui-kit";
import classNames from "classnames";
import styles from "./LoaderFiles.module.scss";

const LoaderFiles = ({ label, modalTitle, modalText, typeModal, active }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.loader}>
      <Input label={label} type={"file"} className={styles.loaderInput} />
      <div
        className={classNames(styles.loaderIcon, {
          [styles.loaderIconTop]: label
        })}
        onClick={() => dispatch(toggleModal(typeModal))}
      >
        <TrashIcon />
      </div>
      <Modal title={modalTitle} active={active} id={typeModal}>
        <div className={styles.loaderModal}>
          {modalText && <p className={styles.loaderModalText}>{modalText}</p>}
          <div className={styles.loaderModalButtonsRoot}>
            <Button
              bgWhite
              onClick={() => dispatch(toggleModal(typeModal))}
            >
              Закрыть
            </Button>
            <Button>Удалить</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoaderFiles;

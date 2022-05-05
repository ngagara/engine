import { useNavigate } from "react-router-dom";
import { Button, Modal, Input, Alert } from "../../../ui-kit";
import styles from "./AuthModal.module.scss";

const authModal = ({ modalActive, setModalActive, title }) => {
  let navigate = useNavigate();

  const pushBooksPage = () => {
    navigate("/books");
  };
  return (
    <Modal
      className={styles.auth}
      active={modalActive}
      setActive={setModalActive}
      title={title}
    >
      <div className={styles.authRoot}>
        <Input
          className={styles.authInput}
          label={"Пароль"}
          type={"password"}
        />
        {true && (
          <Alert
            className={styles.authAlert}
            text={"Проверьте правильность введенных данных"}
          />
        )}
        <Button className={styles.authButton} onClick={pushBooksPage}>
          Войти
        </Button>
      </div>
    </Modal>
  );
};

export default authModal;

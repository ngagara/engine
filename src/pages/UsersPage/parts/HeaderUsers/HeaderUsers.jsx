import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import UserForm from "../UserForm/UserForm";
import { Container, Button, Modal } from "../../../../ui-kit";
import styles from "./HeaderUsers.module.scss";

const HeaderUsers = () => {
  const dispatch = useDispatch();
  const { add_user } = useSelector((state) => state.support.modals);

  return (
    <>
      <Container className={styles.header}>
        <p className={styles.headerTitle}>Пользователи</p>
        <Button onClick={() => dispatch(toggleModal("add_user"))}>
          Добавить пользователя
        </Button>
      </Container>
      <Modal
        title={"Добавление пользователя"}
        active={add_user}
        id={"add_user"}
      >
        <UserForm modalId={"add_user"} />
      </Modal>
    </>
  );
};

export default HeaderUsers;

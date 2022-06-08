import { useEffect } from "react";
import UserForm from "../UserForm/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../../store/supportSlice";
import { toggleModal } from "../../../../store/supportSlice";
import { Container, Modal } from "../../../../ui-kit";
import { TrashIcon } from "../../../../img/icons";
import { setDefaultRole, getAvailableBooks } from "../../../../utils";
import styles from "./User.module.scss";

const User = ({ id, login, role, userbooks }) => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.support.modals);
  const users = useSelector((state) => state.auth.users);

  useEffect(() => {
    users.forEach((user) => {
      dispatch(setModalState(user.id));
    });
  }, []);

  return (
    <>
      <Container className={styles.user}>
        <p
          className={styles.userLogin}
          onClick={() => dispatch(toggleModal(id.toString()))}
        >
          {login}
        </p>
        <p className={styles.userRole}>{setDefaultRole(role)}</p>
        {role !== "admin" && (
          <>
            <p className={styles.userBooks}>{getAvailableBooks(userbooks)}</p>
            <div className={styles.userIcon}>
              <TrashIcon />
            </div>
          </>
        )}
      </Container>
      <Modal title={"Пользователь"} active={modals[id]} id={id.toString()}>
        <UserForm
          login={login}
          modalId={id.toString()}
          userbooks={userbooks}
          role={role}
        />
      </Modal>
    </>
  );
};

export default User;

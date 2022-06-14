import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { setAvailableBooks } from "../../../../store/booksSlice";
import { setUser } from "../../../../store/authSlice";
import { Container } from "../../../../ui-kit";
import { TrashIcon } from "../../../../img/icons";
import { setDefaultRole, getAvailableBooks } from "../../../../utils";
import styles from "./User.module.scss";

const User = ({ user }) => {
  const dispatch = useDispatch();

  const { name, role, books } = user;

  const handeleOpenEditModal = () => {
    dispatch(setUser(user));
    dispatch(setAvailableBooks(books));
    dispatch(toggleModal("edit_user"));
  };

  return (
    <>
      <Container className={styles.user}>
        <p className={styles.userLogin} onClick={() => handeleOpenEditModal()}>
          {name}
        </p>
        <p className={styles.userRole}>{setDefaultRole(role)}</p>
        {role !== "admin" && (
          <>
            <p className={styles.userBooks}>{getAvailableBooks(books)}</p>
            <div className={styles.userIcon}>
              <TrashIcon />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default User;

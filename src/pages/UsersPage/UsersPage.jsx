import { useSelector } from "react-redux";
import HeaderUsers from "./parts/HeaderUsers/HeaderUsers";
import { Modal } from "../../ui-kit";
import UserForm from "./parts/UserForm/UserForm";
import User from "./parts/User/User";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
  const users = useSelector((state) => state.auth.users);
  const { edit_user } = useSelector((state) => state.support.modals);

  return (
    <section className={styles.page}>
      <HeaderUsers />
      <div className={styles.pageUsers}>
        {users && users.map((user) => <User user={user} key={user.id} />)}
      </div>
      <Modal title={"Пользователь"} active={edit_user} id={"edit_user"}>
        <UserForm modalId={"edit_user"} />
      </Modal>
    </section>
  );
};

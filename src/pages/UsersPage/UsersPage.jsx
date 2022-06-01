import { useSelector } from "react-redux";
import HeaderUsers from "./parts/HeaderUsers/HeaderUsers";
import User from "./parts/User/User";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
  const users = useSelector((state) => state.auth.users);

  return (
    <section className={styles.page}>
      <HeaderUsers />
      <div className={styles.pageUsers}>
        {users &&
          users.map((user) => {
            return (
              <User
                id={user.id}
                key={user.id}
                login={user.name}
                role={user.role}
                books={user.books}
              />
            );
          })}
      </div>
    </section>
  );
};

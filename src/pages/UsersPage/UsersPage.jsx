import HeaderUsers from "./parts/HeaderUsers/HeaderUsers";
import User from "./parts/User/User";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
  return (
    <section className={styles.page}>
      <HeaderUsers />
      <div className={styles.pageUsers}>
        <User login={"test@test.ru"} role={"Администратор"} />
        <User login={"test@test.ru"} role={"Автор"} />
        <User login={"test@test.ru"} role={"Автор"} />
        <User login={"test@test.ru"} role={"Автор"} />
        <User login={"test@test.ru"} role={"Автор"} />
      </div>
    </section>
  );
};

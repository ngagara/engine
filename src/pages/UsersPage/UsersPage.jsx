import { TrashIcon } from "../../img/icons";
import { Container, Button } from "../../ui-kit";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
  return (
    <section className={styles.page}>
      <Container className={styles.pageHeader}>
        <p className={styles.pageHeaderTitle}>Пользователи</p>
        <Button>Добавить пользователя</Button>
      </Container>
      <div className={styles.users}>
        <Container className={styles.usersItem}>
          <p className={styles.usersItemLogin}>test@test.ru</p>
          <p className={styles.usersItemRole}>Администратор</p>
          <p
            className={styles.usersItemBooks}
          >{`${"Преступный маг"}, ${"Преступный маг"}`}</p>
          <div className={styles.usersItemIcon}>
            <TrashIcon />
          </div>
        </Container>
        <Container className={styles.usersItem}>
          <p className={styles.usersItemLogin}>test@test.ru</p>
          <p className={styles.usersItemRole}>Автор</p>
          <p
            className={styles.usersItemBooks}
          >{`${"НЕпреступный маг"}, ${"Маг"}`}</p>
          <div className={styles.usersItemIcon}>
            <TrashIcon />
          </div>
        </Container>
        <Container className={styles.usersItem}>
          <p className={styles.usersItemLogin}>test@test.ru</p>
          <p className={styles.usersItemRole}>Тестировщик</p>
          <p
            className={styles.usersItemBooks}
          >{`${"Какойото маг"}, ${"Преступный маг"}`}</p>
          <div className={styles.usersItemIcon}>
            <TrashIcon />
          </div>
        </Container>
      </div>
    </section>
  );
};

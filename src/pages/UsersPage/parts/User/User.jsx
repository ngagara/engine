import { TrashIcon } from "../../../../img/icons";
import { Container } from "../../../../ui-kit";
import styles from "./User.module.scss";

const User = ({ login, role, books }) => {
  return (
    <Container className={styles.user}>
      <p className={styles.userLogin}>{login}</p>
      <p className={styles.userRole}>{role}</p>
      {role !== "Администратор" && (
        <>
          <p
            className={styles.userBooks}
          >{`${"Преступный маг"}, ${"Преступный маг"}`}</p>
          <div className={styles.userIcon}>
            <TrashIcon />
          </div>
        </>
      )}
    </Container>
  );
};

export default User;

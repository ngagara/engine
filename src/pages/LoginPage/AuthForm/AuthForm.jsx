import { useNavigate } from "react-router-dom";
import { Button, Input, Alert } from "../../../ui-kit";
import styles from "./AuthForm.module.scss";

const AuthForm = () => {
  let navigate = useNavigate();

  const pushBooksPage = () => {
    navigate("/books");
  };
  return (
    <form className={styles.auth}>
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
    </form>
  );
};

export default AuthForm;

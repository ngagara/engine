import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/supportSlice";
import { Container, Button, Modal, Toast } from "../../ui-kit";
import AuthForm from "./AuthForm/AuthForm";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.support.modals);

  return (
    <>
      <Container p30>
        <Button onClick={() => dispatch(toggleModal("login"))}>Войти</Button>
      </Container>
      <Modal
        className={styles.modal}
        title={"Авторизация"}
        component={<AuthForm />}
        active={login}
        id={"login"}
      />
      <Toast />
    </>
  );
};

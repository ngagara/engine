import { useDispatch } from 'react-redux';
import { setModalActive } from '../../store/supportSlice'
import { Container, Button, Modal } from "../../ui-kit";
import AuthForm from "./AuthForm/AuthForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {

  const dispatch = useDispatch()

  const handelLogin = () => {
    dispatch(setModalActive(true));
  };

  return (
    <>
      <Container p30>
        <Button onClick={handelLogin}>Войти</Button>
      </Container>
      <Modal
        className={styles.modal}
        title={"Авторизация"}
        component={<AuthForm />}
      />
    </>
  );
};

export default LoginPage;

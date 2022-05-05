import { useState } from "react";
import { Container, Button } from "../../ui-kit";
import AuthModal from "./AuthModal/AuthModal";

const LoginPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const handelLogin = () => {
    setModalActive(true);
  };

  return (
    <>
      <Container p30>
        <Button onClick={handelLogin}>Войти</Button>
      </Container>
      <AuthModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        title={"Авторизация"}
      />
    </>
  );
};

export default LoginPage;

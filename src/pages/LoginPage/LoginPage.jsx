import { Container, Button } from "../../ui-kit";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  const handelLogin = () => {
    navigate("/books");
  };

  return (
    <div>
      <Container p30>
        <Button onClick={handelLogin}>Вход</Button>
      </Container>
    </div>
  );
};

export default LoginPage;

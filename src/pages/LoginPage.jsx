import { Container, Button } from "../ui-kit";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  const handelLogin = () => {
    navigate('/')
  }
  return (
    <Container>
      <Button bgWhite onClick={handelLogin}>
        Login
      </Button>
    </Container>
  );
}

export default LoginPage

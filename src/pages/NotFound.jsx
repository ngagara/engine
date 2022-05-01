import { Button, Container } from "../ui-kit";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Button onClick={handleClick}>НАЗАД</Button>
      <h2>Not Found</h2>
    </Container>
  );
};

export default NotFound;

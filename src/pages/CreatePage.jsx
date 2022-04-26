import { useNavigate } from "react-router-dom";
import Button from "../ui-kit/Button/Button";

const CreatePage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <Button onClick={handleClick()}>asd</Button>;
};

export default CreatePage;

import { useParams } from "react-router-dom";
import { Container } from "../ui-kit";

const EditPage = () => {
  const params = useParams();
  console.log(params);
  return <Container></Container>;
};

export default EditPage;

import { Container } from "../../ui-kit";
import image from "../../img/404.png";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Container className={styles.page}>
      <img className={styles.pageImage} src={image} alt="Pikachu 404" />
      <h2 className={styles.pageError}>404</h2>
    </Container>
  );
};

export default NotFound;

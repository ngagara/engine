import { Container, Button } from "../ui-kit";
import styles from "./BooksPage.module.scss";

const BooksPage = () => {
  console.log("render books page");

  return (
    <section className={styles.page}>
      <Container>
        <Button>Добавить книгу</Button>
      </Container>
    </section>
  );
};

export default BooksPage;

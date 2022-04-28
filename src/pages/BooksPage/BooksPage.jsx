import { Container, Button } from "../../ui-kit";
import Paper from "./parts/Paper";
import styles from "./BooksPage.module.scss";
import classNames from "classnames";

const BooksPage = ({ ...props }) => {
  const { handelAddNewBook, isPaper, hiddenButton, disabledButton } = props;
  return (
    <section className={styles.page}>
      <Container p30 className={styles.container}>
        {hiddenButton && (
          <Button disabled={disabledButton} onClick={handelAddNewBook}>
            Добавить книгу
          </Button>
        )}
        <Container className={styles.containerPaper}>
          {isPaper &&
            isPaper.map((paper) => (
              <Paper
                className={classNames({ [styles.paper]: !hiddenButton })}
                key={paper.id}
                src={paper.src}
                title={paper.name}
              />
            ))}
        </Container>
      </Container>
    </section>
  );
};

export default BooksPage;

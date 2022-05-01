import { Container, Button, Alert } from "../../ui-kit";
import Paper from "./parts/Paper";
import styles from "./BooksPage.module.scss";
import classNames from "classnames";

const BooksPage = ({ ...props }) => {
  const { handelAddNewBook, isPapers, hiddenButton, disabledButton } = props;
  return (
    <section className={styles.page}>
      <Container p30 className={styles.container}>
        {hiddenButton && (
          <Container className={styles.containerButton}>
            <Button disabled={disabledButton} onClick={handelAddNewBook}>
              Добавить книгу
            </Button>
            {disabledButton && <Alert text={'Не задано имя новой книги'} className={styles.alert} />}
          </Container>
        )}
        <Container className={styles.containerPaper}>
          {isPapers &&
            isPapers.map((paper) => (
              <Paper
                className={classNames(styles.paper, { [styles.paperHidden]: !hiddenButton })}
                key={paper.id}
                src={paper.src}
                title={paper.name}
                id={paper.id}
              />
            ))}
        </Container>
      </Container>
    </section>
  );
};

export default BooksPage;

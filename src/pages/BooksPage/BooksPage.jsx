import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewBook, addNewBook } from "../../store/booksSlice";
import { Container, Button, Alert } from "../../ui-kit";
import Paper from "./parts/Paper";
import styles from "./BooksPage.module.scss";

export const BooksPage = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNewBook());
  }, []);

  const handelAddNewBook = () => {
    if (books[books.length - 1].name === "Новая книга") {
      setDisabledButton(true);
    } else {
      dispatch(addNewBook());
    }
  };

  return (
    <section className={styles.page}>
      <Container p30 className={styles.container}>
        <Container className={styles.containerButton}>
          <Button disabled={disabledButton} onClick={handelAddNewBook}>
            Добавить книгу
          </Button>
          {disabledButton && (
            <Alert
              text={"Не задано имя новой книги"}
              className={styles.alert}
            />
          )}
        </Container>
        <Container className={styles.containerPaper}>
          {books &&
            books.map((paper) => (
              <Paper
                className={styles.paper}
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

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditBook } from "../../store/booksSlice";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../ui-kit";
import styles from "./EditPage.module.scss";
import Sidebar from "./../../components/Sidebar/Sidebar";

export const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.edit_book);

  useEffect(() => {
    dispatch(setEditBook(Number(id)));
  }, []);

  return (
    <section className={styles.page}>
      <Sidebar name={book.name} />
      <Container>
        <Outlet />
      </Container>
    </section>
  );
};

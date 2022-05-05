import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../ui-kit";
import styles from "./EditPage.module.scss";
import Sidebar from './../../components/Sidebar/Sidebar';

const EditPage = () => {
  const [isBook, setBook] = useState({});
  const { id } = useParams();
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    books.forEach(book => {
      if (book.id === Number(id)) setBook(book)
    })
  }, [id])

  return (
    <section className={styles.page}>
      <Sidebar name={isBook.name} />
      <Container>
        <Outlet />
      </Container>
    </section >
  );
};

export default EditPage;

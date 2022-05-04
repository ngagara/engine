import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../ui-kit";
import styles from "./EditPage.module.scss";
import Sidebar from './../../components/Sidebar/Sidebar';

const EditPage = () => {
  const [isBook, setBook] = useState({});
  const { id } = useParams();
  const books = useSelector(state => state.books);

  useEffect(() => {
    books.forEach(paper => {
      if (books.id === Number(id)) setBook(paper)
    })
  }, [id])

  return (
    <section className={styles.page}>
      <Sidebar name={isBook.name} />
      <Container>
        <Outlet/>
      </Container>
    </section >
  );
};

export default EditPage;

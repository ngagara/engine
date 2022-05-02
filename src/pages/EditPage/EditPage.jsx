import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../ui-kit";
import styles from "./EditPage.module.scss";
import Sidebar from './../../components/Sidebar/Sidebar';

const EditPage = ({ isPapers }) => {
  const [isBook, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    isPapers.forEach(paper => {
      if (paper.id === Number(id)) setBook(paper)
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

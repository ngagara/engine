import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { classNames } from 'classnames';
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
    <Container className={styles.container}>
      <Sidebar/>
    </Container>
  );
};

export default EditPage;

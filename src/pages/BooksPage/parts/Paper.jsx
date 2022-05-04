import { Link } from "react-router-dom";
import styles from "./Paper.module.scss";

const Paper = ({ src, title, id, className }) => {
  return (
    <Link className={`${styles.paper} ${className}`} to={`/books/${id}/plot`}>
      <img className={styles.img} src={src} alt={`Карточка ${title}`} />
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
};

export default Paper;

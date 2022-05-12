import { Link } from "react-router-dom";
import styles from "./Paper.module.scss";

const Paper = ({ src, title, id, className }) => {
  return (
    <Link className={`${styles.paper} ${className}`} to={`${id}/plot`}>
      <img className={styles.paperImg} src={src} alt={`Карточка ${title}`} />
      <h2 className={styles.paperTitle}>{title}</h2>
    </Link>
  );
};

export default Paper;

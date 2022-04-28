import styles from "./Paper.module.scss";

const Paper = ({ src, title, className }) => {
  return (
    <div className={`${styles.paper} ${className}`}>
      <img className={styles.img} src={src} alt={title} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Paper;

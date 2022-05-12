import styles from "./Link.module.scss";

export const Link = ({ text }) => {
  return (
    <a className={styles.link} target="_blank" href="'">
      {text}
    </a>
  );
};

import { Container } from './../../../ui-kit/Container/Container';
import styles from "./SoundsSection.module.scss";

const SoundsSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Container className={styles.container}>
          <p className={styles.title}>Звуки</p>
        </Container>
      </div>
      
    </div>
  );
};

export default SoundsSection;

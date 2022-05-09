import styles from "./ImagesSection.module.scss";
import { Container } from './../../../ui-kit/Container/Container';

export const ImagesSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Container className={styles.container}>
          <p className={styles.title}>Изображения</p>
        </Container>
      </div>
      
    </div>
  );
};

export default ImagesSection;

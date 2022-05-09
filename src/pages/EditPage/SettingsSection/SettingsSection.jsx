import { Container } from './../../../ui-kit/Container/Container';
import styles from "./SettingsSection.module.scss";

const SettingsSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Container className={styles.container}>
          <p className={styles.title}>Настройки</p>
        </Container>
      </div>
      
    </div>
  );
};

export default SettingsSection;

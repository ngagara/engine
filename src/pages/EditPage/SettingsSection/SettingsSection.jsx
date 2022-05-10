import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./SettingsSection.module.scss";

const SettingsSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.title}>Настройки</p>
      </SectionContainer>
    </div>
  );
};

export default SettingsSection;

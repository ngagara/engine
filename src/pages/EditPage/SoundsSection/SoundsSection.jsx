import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./SoundsSection.module.scss";

const SoundsSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.title}>Звуки</p>
      </SectionContainer>
    </div>
  );
};

export default SoundsSection;

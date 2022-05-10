import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./ImagesSection.module.scss";

export const ImagesSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.title}>Изображения</p>
      </SectionContainer>
    </div>
  );
};

export default ImagesSection;

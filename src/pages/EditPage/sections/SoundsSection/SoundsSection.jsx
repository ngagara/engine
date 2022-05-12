import { Container, Input, Button, Modal, Link } from "../../../../ui-kit";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./SoundsSection.module.scss";

const SoundsSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.title}>Звуки</p>
      </SectionContainer>
      {/* тут будет реальная проверка на наличие изображений  */}
      <Container>
        <p className={styles.sectionAlert}>Не загружено ни одного звука</p>
      </Container>
    </div>
  );
};

export default SoundsSection;

import { useSelector } from "react-redux";
import LoaderFiles from "../parts/LoaderFiles/LoaderFiles";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import { Container, Link } from "../../../../ui-kit";
import styles from "./ImagesSection.module.scss";

export const ImagesSection = () => {
  const { delete_image } = useSelector((state) => state.support.modals);
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.sectionTitle}>Изображения</p>
      </SectionContainer>
      {/* тут будет реальная проверка на наличие изображений  */}
      <Container className={styles.sectionGrid}>
        <div className={styles.sectionItem}>
          <Link text={"Параграф #3"} />
          <img
            src={
              "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            }
            alt={"book.name"}
            className={styles.sectionItemImage}
          />
          <LoaderFiles
            modalTitle={"Удалить изображение?"}
            modalText={"Публикация в параграфе будет отменена"}
            active={delete_image}
            typeModal={"delete_image"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ImagesSection;

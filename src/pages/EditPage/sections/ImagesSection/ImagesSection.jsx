import { useSelector, useDispatch } from "react-redux";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import { toggleModal } from "../../../../store/supportSlice";
import { Container, Input, Button, Modal, Link } from "../../../../ui-kit";
import styles from "./ImagesSection.module.scss";
import { TrashIcon } from "../../../../img/icons";

export const ImagesSection = () => {
  const { delete_image } = useSelector((state) => state.support.modals);
  const dispatch = useDispatch();

  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.sectionTitle}>Изображения</p>
      </SectionContainer>
      {/* тут будет реальная проверка на наличие изображений  */}
      {/* <Container>
        <p className={styles.sectionAlert}>
          Не загружено ни одного изображения
        </p>
      </Container> */}
      <Container className={styles.sectionGrid}>
        <div className={styles.sectionItem}>
          <Link text={"Параграф #1"} />
          <img
            src={
              "https://images.unsplash.com/photo-1601615358719-0280e06c9786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            alt={"book.name"}
            className={styles.sectionItemImage}
          />
          <div className={styles.sectionInputRoot}>
            <Input type={"file"} className={styles.sectionInputRootInput} />
            <div
              className={styles.sectionInputRootIcon}
              onClick={() => dispatch(toggleModal("delete_image"))}
            >
              <TrashIcon />
            </div>
          </div>
        </div>
        <div className={styles.sectionItem}>
          <Link text={"Параграф #3"} />
          <img
            src={
              "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            }
            alt={"book.name"}
            className={styles.sectionItemImage}
          />
          <div className={styles.sectionInputRoot}>
            <Input type={"file"} className={styles.sectionInputRootInput} />
            <div
              className={styles.sectionInputRootIcon}
              onClick={() => dispatch(toggleModal("delete_image"))}
            >
              <TrashIcon />
            </div>
          </div>
        </div>
        <div className={styles.sectionItem}>
          <Link text={"Параграф #3"} />
          <img
            src={
              "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            }
            alt={"book.name"}
            className={styles.sectionItemImage}
          />
          <div className={styles.sectionInputRoot}>
            <Input type={"file"} className={styles.sectionInputRootInput} />
            <div
              className={styles.sectionInputRootIcon}
              onClick={() => dispatch(toggleModal("delete_image"))}
            >
              <TrashIcon />
            </div>
          </div>
        </div>
      </Container>
      <Modal
        title={"Удалить изображение?"}
        active={delete_image}
        id={"delete_image"}
      >
        <p className={styles.sectionModalText}>
          Все данные будут безвозвратно утеряны
        </p>
        <div className={styles.sectionModal}>
          <Button bgWhite onClick={() => dispatch(toggleModal("delete_image"))}>
            Закрыть
          </Button>
          <Button>Удалить</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ImagesSection;

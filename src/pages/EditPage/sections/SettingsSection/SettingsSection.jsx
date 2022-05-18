import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Input,
  Button,
  Alert,
  Modal,
  Link
} from "../../../../ui-kit";
import { toggleModal } from "../../../../store/supportSlice";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import LoaderFiles from "../parts/LoaderFiles/LoaderFiles";
import styles from "./SettingsSection.module.scss";

const SettingsSection = () => {
  const book = useSelector((state) => state.books.edit_book);
  const { delete_book, delete_image } = useSelector(
    (state) => state.support.modals
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.sectionTitle}>Настройки</p>
      </SectionContainer>
      <Container className={styles.sectionContainer}>
        <Alert text={"Если есть ошибки, то они выводятся тут"} />
        <Input
          label={"Название книги"}
          className={styles.sectionInput}
          placeholder={book.name}
        />
        {book.name !== "Новая книга" && (
          <img src={book.src} alt={book.name} className={styles.sectionImage} />
        )}
        <LoaderFiles
          label={"Обложка"}
          modalTitle={"Удалить обложку?"}
          active={delete_image}
          typeModal={"delete_image"}
        />
        <div className={styles.sectionInputRoot}>
          <Input label={"Токен"} className={styles.sectionInput} />
          <Link text={"@bot"} />
        </div>
        <div className={styles.sectionButtons}>
          <Button bgWhite onClick={() => dispatch(toggleModal("delete_book"))}>
            Удалить
          </Button>
          <Button bgWhite>Сохранить</Button>
        </div>
      </Container>
      <Modal title={"Удалить книгу?"} active={delete_book} id={"delete_book"}>
        <p className={styles.sectionModalText}>
          Все данные будут безвозвратно утеряны
        </p>
        <div className={styles.sectionModal}>
          <Button onClick={() => dispatch(toggleModal("delete_book"))}>
            Закрыть
          </Button>
          <Button bgWhite>Удалить</Button>
        </div>
      </Modal>
    </div>
  );
};

export default SettingsSection;

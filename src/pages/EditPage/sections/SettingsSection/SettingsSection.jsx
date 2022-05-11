import { useSelector, useDispatch } from "react-redux";
import { Container, Input, Button, Alert, Modal } from "../../../../ui-kit";
import { setModalActive } from "../../../../store/supportSlice";
import { TrashIcon } from "../../../../img/icons";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./SettingsSection.module.scss";

const SettingsSection = () => {
  const book = useSelector((state) => state.books.edit_book);
  const dispatch = useDispatch();

  const handelOpenModal = (id) => {
    dispatch(setModalActive({ active: true, id }));
  };

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
        <div className={styles.sectionInputRoot}>
          <Input
            label={"Обложка"}
            type={"file"}
            className={styles.sectionInput}
          />
          <div className={styles.sectionIcon} onClick={handelOpenModal('delete_image')}>
            <TrashIcon />
          </div>
        </div>
        <div className={styles.sectionInputRoot}>
          <Input label={"Токен"} className={styles.sectionInput} />
          <a className={styles.sectionInputLink} target="_blank" href="'">
            @TestBot
          </a>
        </div>
        <div className={styles.sectionButtons}>
          <Button bgWhite disabled>
            Выгрузить
          </Button>
          <Button bgWhite onClick={handelOpenModal('delete_book')}>Удалить</Button>
          <Button bgWhite>Сохранить</Button>
        </div>
      </Container>
      <Modal title={"Удалить обложку?"} />
      <Modal title={"Удалить книгу?"} />
    </div>
  );
};

export default SettingsSection;

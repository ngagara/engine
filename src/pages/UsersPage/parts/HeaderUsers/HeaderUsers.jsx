import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { ReloadIcon } from "../../../../img/icons";
import { toggleModal } from "../../../../store/supportSlice";
import {
  Container,
  Button,
  Modal,
  Input,
  Select,
  Checkbox
} from "../../../../ui-kit";
import styles from "./HeaderUsers.module.scss";

const HeaderUsers = () => {
  const dispatch = useDispatch();
  const { add_user } = useSelector((state) => state.support.modals);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container className={styles.header}>
        <p className={styles.headerTitle}>Пользователи</p>
        <Button onClick={() => dispatch(toggleModal("add_user"))}>
          Добавить пользователя
        </Button>
      </Container>
      <Modal
        title={"Добавление пользователя"}
        active={add_user}
        id={"add_user"}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formInputs}>
            <Input label={"Имя пользователя"} className={styles.formInput} />
            <Input label={"Пароль"} className={styles.formInput} />
            <div className={styles.formIcon}>
              <ReloadIcon />
            </div>
          </div>
          <Select
            label={"Роль"}
            options={["Тестировщик", "Автор", "Администратор"]}
            className={styles.formSelect}
          />
          <div className={styles.formBooks}>
            <p className={styles.formBooksTitle}>Доступные книги</p>
            <div className={styles.formBooksContainer}>
              <Checkbox label={"Новая книга"} name={"qwe"} />
              <Checkbox label={"Новая книга"} name={"123"} />
              <Checkbox label={"Новая книга"} name={"qewr"} />
              <Checkbox label={"Новая книга"} name={"wer"} />
              <Checkbox label={"Новая книга"} name={"df"} />
              <Checkbox label={"Новая книга"} name={"dasd"} />
              <Checkbox label={"Новая книга"} name={"dxcvf"} />
              <Checkbox label={"Новая книга"} name={"dxcvf"} />
              <Checkbox label={"Новая книга"} name={"dxcvxxf"} />
              <Checkbox label={"Новая книга"} name={"dfwed"} />
            </div>
          </div>
          <div className={styles.formButtons}>
            <Button bgWhite>Закрыть</Button>
            <Button>Добавить</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default HeaderUsers;

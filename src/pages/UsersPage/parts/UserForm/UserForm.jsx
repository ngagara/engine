import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { ReloadIcon } from "../../../../img/icons";
import { Button, Input, Select, Checkbox } from "../../../../ui-kit";
import generator from "generate-password";
import styles from "./UserForm.module.scss";

const UserForm = ({ options, books }) => {
  const dispatch = useDispatch();

  const HandelPasswordGenerate = () => {
    const password = generator.generate({
      length: 6,
      numbers: true,
      uppercase: false,
      symbols: true,
      exclude: "<>~!{}[]'/|-_:;`*,.^()"
    });
    setValue("password", password);
  };

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formInputs}>
        <Input
          label={"Имя пользователя"}
          register={{ ...register("login", { required: true }) }}
          className={styles.formInput}
        />
        <Input
          label={"Пароль"}
          register={{ ...register("password", { required: true }) }}
          className={styles.formInput}
        />
        <div className={styles.formIcon} onClick={HandelPasswordGenerate}>
          <ReloadIcon />
        </div>
      </div>
      <Select
        label={"Роль"}
        options={["-", "Тестировщик", "Автор", "Администратор"]}
        className={styles.formSelect}
      />
      <div className={styles.formBooks}>
        <p className={styles.formBooksTitle}>Доступные книги</p>
        <div className={styles.formBooksContainer}>
          <Checkbox label={"Новая книга"} name={"qwe"} />
          <Checkbox label={"Новая книга"} name={"123"} />
          <Checkbox label={"Новая книга"} name={"qewr"} />
        </div>
      </div>
      <div className={styles.formButtons}>
        <Button bgWhite onClick={() => dispatch(toggleModal("add_user"))}>
          Закрыть
        </Button>
        <Button type={"submit"}>Применить</Button>
      </div>
    </form>
  );
};

export default UserForm;

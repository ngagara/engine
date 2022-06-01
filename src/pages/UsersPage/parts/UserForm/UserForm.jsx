import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { ReloadIcon } from "../../../../img/icons";
import { Button, Input, Select, Checkbox } from "../../../../ui-kit";
import generator from "generate-password";
import classNames from "classnames";
import styles from "./UserForm.module.scss";

const UserForm = ({ books, role, modalId }) => {
  const dispatch = useDispatch();
  const disabled = role === "Администратор";
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);

  const HandelPasswordGenerate = () => {
    const password = generator.generate({
      length: 6,
      numbers: true,
      uppercase: false
    });
    setValue("password", password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formInputs}>
        <Input
          label={"Имя пользователя"}
          register={{ ...register("login", { required: true }) }}
          className={styles.formInput}
          disabled={disabled}
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
        disabled={disabled}
      />
      <div className={styles.formBooks}>
        <p
          className={classNames(styles.formBooksTitle, {
            [styles.formBooksTitleDisabled]: disabled
          })}
        >
          Доступные книги
        </p>
        <div className={styles.formBooksContainer}>
          {books &&
            books.map((book, index) => (
              <Checkbox
                key={index}
                label={book}
                name={book}
                disabled={disabled}
              />
            ))}
        </div>
      </div>
      <div className={styles.formButtons}>
        <Button bgWhite onClick={() => dispatch(toggleModal(modalId))}>
          Закрыть
        </Button>
        <Button type={"submit"}>Применить</Button>
      </div>
    </form>
  );
};

export default UserForm;

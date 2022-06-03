import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { ReloadIcon } from "../../../../img/icons";
import { Button, Input, Select, Checkbox } from "../../../../ui-kit";
import generator from "generate-password";
import classNames from "classnames";
import styles from "./UserForm.module.scss";

const UserForm = ({ role, modalId, login }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm();

  const disabled = role === "admin";

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setValue("login", login);
  }, []);

  const HandelPasswordGenerate = () => {
    const password = generator.generate({
      length: 6,
      numbers: true,
      uppercase: false
    });
    setValue("password", password);
  };

  const options = [
    { value: "tester", label: "Тестировщик" },
    { value: "author", label: "Автор" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formInputs}>
        <Input
          label={"Имя пользователя"}
          register={{ ...register("login", { required: true }) }}
          className={styles.formInput}
          required={errors.login}
          disabled={disabled}
        />
        <Input
          label={"Пароль"}
          register={{ ...register("password", { required: true }) }}
          className={styles.formInput}
          required={errors.password}
        />
        <div className={styles.formIcon} onClick={HandelPasswordGenerate}>
          <ReloadIcon />
        </div>
      </div>
      <Controller
        name="role"
        control={control}
        defaultValue={role ? role : "-"}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Select
            labelSelect={"Роль"}
            className={styles.formSelect}
            disabled={disabled}
            options={options}
            selectedValue={value}
            onChangeOption={onChange}
          />
        )}
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
            books.map((book) => (
              <Checkbox
                key={book.id}
                label={book.name}
                name={book.name}
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

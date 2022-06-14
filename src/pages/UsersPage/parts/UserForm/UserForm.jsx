import { useEffect } from "react";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { ReloadIcon } from "../../../../img/icons";
import { Button, Input, Select, Checkbox } from "../../../../ui-kit";
import { setDefaultRole, passwordGenerate } from "../../../../utils";
import { options } from "../../../../constants";
import styles from "./UserForm.module.scss";

const UserForm = ({ modalId }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm();
  const { role, name, password, books } = useSelector(
    (state) => state.auth.user
  );

  const { available_books } = useSelector((state) => state.books);

  const disabled = role === "admin";

  console.log(available_books);

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setValue("name", name);
    setValue("role", role);
    setValue("password", password);
  }, [name, role]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formInputs}>
        <Input
          label={"Имя пользователя"}
          register={{ ...register("name", { required: true }) }}
          className={styles.formInput}
          required={errors.name}
          disabled={disabled}
          // readOnly={read_only}
          // const read_only = role !== null;
        />
        <Input
          label={"Пароль"}
          register={{ ...register("password", { required: true }) }}
          className={styles.formInput}
          required={errors.password}
        />
        <div
          className={styles.formIcon}
          onClick={() => passwordGenerate(setValue, "password")}
        >
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
            setDefaultLabel={setDefaultRole}
            required={errors.role}
          />
        )}
      />
      <div
        className={classNames(styles.formBooks, {
          [styles.formBooksDisabled]: disabled
        })}
      >
        <p className={styles.formBooksTitle}>Доступные книги</p>
        <div className={styles.formBooksContainer}>
          {available_books &&
            available_books.map((book) => (
              <Checkbox
                key={book}
                value={book}
                register={{ ...register("books") }}
              />
            ))}
        </div>
      </div>
      <div className={styles.formButtons}>
        <Button
          bgWhite
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleModal(modalId));
          }}
        >
          Закрыть
        </Button>
        <Button type={"submit"}>Применить</Button>
      </div>
    </form>
  );
};

export default UserForm;

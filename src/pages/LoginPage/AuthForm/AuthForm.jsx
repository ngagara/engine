import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../store/authSlice";
import { useForm } from "react-hook-form";
import { Button, Input, Alert } from "../../../ui-kit";
import styles from "./AuthForm.module.scss";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const password = useSelector((state) => state.auth.password);
  const required = errors.password && errors.password.type === "required"

  // временное решение пока нет нормально авторизации
  const pushBooksPage = (data) => {
    if (data.password !== password) {
      setError("password")
    } else {
      dispatch(setLogin());
      navigate("/books")
    };
  }

  return (
    <form className={styles.auth} onSubmit={handleSubmit(pushBooksPage)}>
      <Input
        className={styles.authInput}
        register={{ ...register("password", { required: true }) }}
        label={"Пароль"}
        type={"password"}
        name={"password"}
        required={required}
        invalid={errors.password}
      />
      {required && <Alert text={'Это обязательное поле'} />}
      {!required && errors.password && <Alert text={'Проверьте правильность введенных данных'} />}
      <Button type={"submit"} className={styles.authButton}>
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;

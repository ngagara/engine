import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../store/authSlice";
import { useForm } from "react-hook-form";
import { Button, Input, Alert } from "../../../ui-kit";
import styles from "./AuthForm.module.scss";

const AuthForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const pushBooksPage = (data) => {
    dispatch(setLogin(data.password));
    reset();
    if (login) navigate("/books");
  };

  return (
    <form className={styles.auth} onSubmit={handleSubmit(pushBooksPage)}>
      <Input
        register={register}
        className={styles.authInput}
        label={"Пароль"}
        type={"password"}
        name={"password"}
        required={"Проверьте правильность введенных данных"}
        error={errors.password}
      />
      <div className={styles.authAlert}>
        {errors?.password && <Alert text={errors?.password?.message} />}
      </div>
      <Button type={"submit"} className={styles.authButton}>
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;

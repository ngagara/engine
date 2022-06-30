import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../store/authSlice";
import { useForm } from "react-hook-form";
import { Button, Input, Alert } from "../../../ui-kit";
import axios from "axios";
import styles from "./AuthForm.module.scss";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const password = useSelector((state) => state.auth);
  const required = errors.password && errors.password.type === "required";

  const pushBooksPage = (data) => {
    // setError("password");
    // dispatch(setLogin());
    // navigate("/books", { replace: true });
  };

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  fetch(`http://185.225.34.18:3000/api/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      login: "admin",
      password: "admin"
    })
  })
    .then(handleErrors)
    .then(function (response) {
      console.log("ok");
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <form
      className={styles.auth}
      // onSubmit={handleSubmit(pushBooksPage)}
      onClick={pushBooksPage}
    >
      <Input
        className={styles.authInput}
        register={{ ...register("login", { required: true }) }}
        label={"Логин"}
        type={"text"}
        name={"login"}
        invalid={errors.login}
      />
      <Input
        className={styles.authInput}
        register={{ ...register("password", { required: true }) }}
        label={"Пароль"}
        type={"password"}
        name={"password"}
        required={required}
        invalid={errors.password}
      />
      {required && (
        <Alert
          className={styles.authAlert}
          smallText={true}
          text={"Это обязательное поле"}
        />
      )}
      {!required && errors.password && (
        <Alert
          className={styles.authAlert}
          smallText={true}
          text={"Проверьте правильность введенных данных"}
        />
      )}
      <Button type={"submit"} className={styles.authButton}>
        Войти
      </Button>
    </form>
  );
};

export default React.memo(AuthForm);

import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Register({ onSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState(
    "Email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const changeNameHandler = useCallback((e) => {
    const newName = e.target.value;
    setName(newName);

    if (newName.length === 0) {
      setNameError("Имя не может быть пустым");
    } else if (newName.length < 2 ||  newName.length > 30) {
      setNameError("Имя должно содержать от 2 до 30 символов");
    } else {
      setNameError("");
    }
  }, []);

  const changeEmailHandler = useCallback((e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (newEmail.length === 0) {
      setEmailError("Email не может быть пустым");
    } else if (!reg.test(String(newEmail).toLowerCase())) {
      setEmailError("Email не корректный");
    } else {
      setEmailError("");
    }
  }, []);

  const changePasswordHandler = useCallback((e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (newPassword.length === 0) {
      setPasswordError("Пароль не может быть пустым");
    } else if (!reg.test(String(newPassword).toLowerCase())) {
      setPasswordError(
        "Пароль должен содержать хотя бы одну цифру, заглавную букву и специальный символ. Количество символов от 6 до 16."
      );
    } else {
      setPasswordError("");
    }
  }, []);

  function blurHandler(e) {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({ name, email, password });
  };

  return (
    <main className="app__wrapper app__auth register">
      <Header mixClass="header_auth" />
      <h1 className="register__title">Добро пожаловать!</h1>

      <Form mixClass="register__form" name="register" onSubmit={submitHandler}>
        <fieldset className="form__fieldset">
          <label className="form__label">
            Имя
            <input
              id="name"
              name="name"
              className="form__input"
              type="text"
              onChange={changeNameHandler}
              onBlur={blurHandler}
            />
             {nameDirty && nameError && (
              <span className="form__input-error">
                {nameError}
              </span>
            )}
          </label>

          <label className="form__label">
            E-mail
            <input
              id="email"
              name="email"
              className="form__input"
              type="email"
              onChange={changeEmailHandler}
              onBlur={blurHandler}
            />
             {emailDirty && emailError && (
              <span className="form__input-error">
                {emailError}
              </span>
            )}
          </label>

          <label className="form__label">
            Пароль
            <input
              id="password"
              name="password"
              className="form__input"
              type="password"
              onChange={changePasswordHandler}
              onBlur={blurHandler}
            />
             {passwordDirty && passwordError && (
              <span className="form__input-error">
                {passwordError}
              </span>
            )}
          </label>
        </fieldset>

        <fieldset className="form__fieldset register__box-submit">
          <button
            type="submit"
            className="form__button"
            disabled={!formValid}
          >
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </button>

          <p className="register__signin-text">
            Уже зарегистрированы?{" "}
            <Link className="register__signin-link link" to="/signin">
              Войти
            </Link>
          </p>
        </fieldset>
      </Form>
    </main>
  );
}

export default Register;

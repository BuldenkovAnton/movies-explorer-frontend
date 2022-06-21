import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IsLoaddingContext } from "../../contexts/IsLoaddingContext";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validate";

import Form from "../Form/Form";
import Header from "../Header/Header";

function Register({ onSubmit }) {
  const isLoading = useContext(IsLoaddingContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      !nameError &&
      !emailError &&
      !passwordError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameError, emailError, passwordError, name, email, password]);

  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  }, []);

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  }, []);

  const changePasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  }, []);

  const blurHandler = useCallback((e) => {
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
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit({ name, email, password });
    },
    [onSubmit, name, email, password]
  );

  return (
    <>
      <main className="app__wrapper app__auth register">
        <Header mixClass="header_auth" />
        <h1 className="register__title">Добро пожаловать!</h1>

        <Form
          mixClass="register__form"
          name="register"
          onSubmit={submitHandler}
        >
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
                <span className="form__input-error">{nameError}</span>
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
                <span className="form__input-error">{emailError}</span>
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
                <span className="form__input-error">{passwordError}</span>
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
    </>
  );
}

export default Register;

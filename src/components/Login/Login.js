import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Login({ alertError, alertClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (email && password) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password]);

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <>
      <Alert text={alertError} onClose={alertClose} />
      <div className="app__wrapper app__auth login">
        <Header mixClass="header_auth" />
        <h1 className="login__title">Рады видеть!</h1>

        <Form name="login" mixClass="login__form" onSubmit={submitHandler}>
          <fieldset className="form__fieldset">
            <label className="form__label">
              E-mail
              <input
                id="email"
                className="form__input"
                type="email"
                onChange={changeEmailHandler}
              />
            </label>

            <label className="form__label">
              Пароль
              <input
                id="password"
                className="form__input"
                type="password"
                onChange={changePasswordHandler}
              />
            </label>
          </fieldset>

          <fieldset className="form__fieldset login__box-submit">
            <button className="form__button" disabled={!formValid}>
              Войти
            </button>
            <p className="login__signup-text">
              Ещё не зарегистрированы?{" "}
              <Link className="login__signup-link link" to="/signup">
                Регистрация
              </Link>
            </p>
          </fieldset>
        </Form>
      </div>
    </>
  );
}

export default Login;

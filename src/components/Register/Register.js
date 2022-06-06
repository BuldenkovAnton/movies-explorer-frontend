import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Register({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({name, email, password});
  }

  return (
    <main className="page page__auth register">
      <Header />
      <h1 className="register__title">Добро пожаловать!</h1>

      <Form mixClass="register__form" name="register" onSubmit={submitHandler}>
        <fieldset className="form__fieldset">
          <label className="form__label">
            Имя
            <input id="name" className="form__input" type="text" onChange={changeNameHandler}/>
          </label>

          <label className="form__label">
            E-mail
            <input id="email" className="form__input" type="email" onChange={changeEmailHandler}/>
          </label>

          <label className="form__label">
            Пароль
            <input id="password" className="form__input" type="password" onChange={changePasswordHandler}/>
          </label>
        </fieldset>

        <fieldset className="form__fieldset register__box-submit">
          <button className="form__button">Зарегистрироваться</button>
          <p className="register__signin-text">
          Уже зарегистрированы? <Link className="register__signin-link link" to="/signin">Войти</Link>
          </p>
        </fieldset>
      </Form>
    </main>
  );
}

export default Register;
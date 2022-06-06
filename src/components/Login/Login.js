import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({email, password});
  }

  return (
    <main className="page__login">
      <>
        <Header />
        <section className="login">
          <h1 className="login__title">Рады видеть!</h1>

          <Form name="login" onSubmit={submitHandler}>
            <fieldset className="form__fieldset">
              <label className="form__label" htmlFor="email">E-mail</label>
              <input id="email" className="form__input" type="email" onChange={changeEmailHandler}/>
            </fieldset>

            <fieldset className="form__fieldset">
              <label className="form__label" htmlFor="password">Пароль</label>
              <input id="password" className="form__input" type="password" onChange={changePasswordHandler}/>
            </fieldset>

            <button className="form__button">Войти</button>
            <p className="login__signup-text">
              Ещё не зарегистрированы? <Link className="login__signup-link link" to="/signup">Регистрация</Link>
            </p>
          </Form>
        </section>
      </>
    </main>
  );
}

export default Login;
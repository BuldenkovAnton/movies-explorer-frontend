import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile({ alertError, alertClose, signOut, onSubmit }) {
  const [name, setName] = useState("Антон");
  const [email, setEmail] = useState("pochata@yandex.ru");
  const [isEdit, setIsEdit] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (name && email) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, email]);

  const isEditHandler = useCallback((e) => {
    setIsEdit(true);
  }, []);

  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();

    onSubmit({name, email});
    setIsEdit(false);
  }, [onSubmit, name, email]);

  const onSignOutHandler = useCallback((e) => {
    e.preventDefault();

    signOut();
  }, [signOut]);

  return (
    <>
      <Alert text={alertError} onClose={alertClose} />
      <Header mixClass="app__wrapper app__header">
        <BurgerMenu>
          <Navigation mixClass="navigation_burger">
            <li className="navigation__item navigation__item_place_burger  navigation__item_hide_notebook">
              <Link
                to="/"
                className="navigation__link navigation__link_place_burger"
              >
                Главная
              </Link>
            </li>
            <li className="navigation__item navigation__item_place_burger">
              <Link
                to="/movies"
                className="navigation__link navigation__link_place_burger"
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__item navigation__item_place_burger">
              <Link
                to="/saved-movies"
                className="navigation__link navigation__link_place_burger"
              >
                Сохранённые фильмы
              </Link>
            </li>
          </Navigation>
        </BurgerMenu>
      </Header>
      <section className="app__wrapper app__profile profile">
        <h1 className="profile__title">Привет, Антон!</h1>
        <Form mixClass="profile__form" onSubmit={onSubmitHandler}>
          <fieldset className="form__fieldset form__fieldset_place_profile">
            <label className="form__label form__label_place_profile">Имя</label>
            <input
              id="name"
              name="name"
              value={name}
              className="form__input form__input_place_profile"
              type="text"
              onChange={changeNameHandler}
              disabled={!isEdit}
            />
          </fieldset>

          <fieldset className="form__fieldset form__fieldset_place_profile">
            <label className="form__label form__label_place_profile">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              value={email}
              className="form__input form__input_place_profile"
              type="email"
              onChange={changeEmailHandler}
              disabled={!isEdit}
            />
          </fieldset>

          <fieldset className="form__fieldset form__fieldset_place_profile">
            {!isEdit && (
              <>
                <button
                  className="link form__button-link form__button_place_profile"
                  onClick={isEditHandler}
                >
                  Редактировать
                </button>

                <button
                  className="link form__button-link form__button_place_profile"
                  onClick={onSignOutHandler}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}

            {isEdit && fetchError && (
              <p className="profile__error">{fetchError}</p>
            )}
            {isEdit && (
              <button className="form__button" disabled={!formValid || !isEdit}>
                Сохранить
              </button>
            )}
          </fieldset>
        </Form>
      </section>
    </>
  );
}

export default Profile;

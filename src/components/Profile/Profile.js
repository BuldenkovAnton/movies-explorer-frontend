import React, { useCallback, useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoaddingContext } from "../../contexts/IsLoaddingContext";
import { validateEmail, validateName } from "../../utils/validate";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Profile({ signOut, onSubmit, profileError, setProfileError }) {
  const currentUser = useContext(CurrentUserContext);
  const isLoading = useContext(IsLoaddingContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (profileError) setSubmitDisabled(true);
    else setSubmitDisabled(false);
  }, [profileError]);

  useEffect(() => {
    if (
      !nameError &&
      !emailError &&
      (name !== currentUser.name || email !== currentUser.email)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    setProfileError("");
  }, [nameError, emailError, currentUser, name, email]);

  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  }, []);

  const changeEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  }, []);

  function handleBlur(e) {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  }

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit({ name, email });
    },
    [onSubmit, name, email]
  );

  const onSignOutHandler = useCallback(
    (e) => {
      e.preventDefault();

      signOut();
    },
    [signOut]
  );

  return (
    <>
      <Header mixClass="app__wrapper app__header">
        <BurgerMenu />
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
              onBlur={handleBlur}
              onChange={changeNameHandler}
            />
            {nameDirty && nameError && (
              <span className="form__input-error form__input-error_place_profile">
                {nameError}
              </span>
            )}
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
              onBlur={handleBlur}
              onChange={changeEmailHandler}
            />
            {emailDirty && emailError && (
              <span className="form__input-error form__input-error_place_profile">
                {emailError}
              </span>
            )}
          </fieldset>

          <fieldset className="form__fieldset form__fieldset_place_profile">
            {profileError && <p className="profile__error">{profileError}</p>}

            {formValid && (
              <button className="form__button" disabled={submitDisabled}>
                {isLoading ? "Созранение..." : "Сохранить"}
              </button>
            )}

            {!formValid && (
              <>
                <button className="link form__button-link form__button_place_profile">
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
          </fieldset>
        </Form>
      </section>
    </>
  );
}

export default Profile;

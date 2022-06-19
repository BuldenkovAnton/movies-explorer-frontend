import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { IsLoaddingContext } from "../../contexts/IsLoaddingContext";

import api from "../../utils/MainApi";
import getCookie from "../../utils/cookie";

import Alert from "../Alert/Alert";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Page404 from "../Page404/Page404";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertError, setAlertError] = useState("");
  const [currentUser, setCurrentUser] = React.useState({
    _id: "",
    name: "",
    email: "",
  });

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setAlertError("");
  }, [location]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn]);

  function tokenCheck() {
    if (getCookie("jwtToken")) {
      return api
        .checkMe()
        .then((user) => {
          setCurrentUser({ _id: user._id, name: user.name, email: user.email });
          setLoggedIn(true);
        })
        .catch((errorCode) => {
          let message = "На сервере произошла ошибка";
          if (errorCode === 401)
            message =
              "При авторизации произошла ошибка. Токен не передан или передан не в том формате";

          setAlertError(message);
        });
    }
  }

  const loginHandler = useCallback(({ email, password }) => {
    setIsLoading(true);
    console.log("Авторизация");

    return api
      .authorize(email, password)
      .then((message) => {
        tokenCheck();
      })
      .catch((errorCode) => {
        let message = "На сервере произошла ошибка";
        if (errorCode === 401)
          message = "Вы ввели неправильный логин или пароль";

        setAlertError(message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const registerHandler = useCallback(({ name, email, password }) => {
    setIsLoading(true);

    return api
      .register(name, email, password)
      .then((response) => {
        tokenCheck();
      })
      .catch((errorCode) => {
        let message = "На сервере произошла ошибка";
        if (errorCode === 400)
          message = "При регистрации пользователя произошла ошибка";
        if (errorCode === 409)
          message = "Пользователь с таким email уже существует";

        setAlertError(message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const signOutHandler = useCallback(() => {
    return api.logout().then((message) => {
      setLoggedIn(false);
      history.push("/");
    });
  }, []);

  const saveProfileHandler = useCallback(({ name, email }) => {
    api
      .setUserInfo(name, email)
      .then((user) => {
        setCurrentUser({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      })
      .catch((errorCode) => {
        let message = "На сервере произошла ошибка";
        if (errorCode === 400)
          message = "При обновлении профиля произошла ошибка";
        if (errorCode === 409)
          message = "Пользователь с таким email уже существует";
        setAlertError(message);
      })
      .finally(() => setIsLoading(false));

    console.log("сохранение", name, email);
  }, []);

  const closeAlertHandler = useCallback(() => {
    setAlertError("");
  }, []);

  const showAlertErrorHandler = useCallback((text) => {
    setAlertError(text);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedContext.Provider value={loggedIn}>
        <IsLoaddingContext.Provider value={isLoading}>
          <Alert text={alertError} onClose={closeAlertHandler} />

          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path="/signin">
              <Login onSubmit={loginHandler} />
            </Route>

            <Route path="/signup">
              <Register onSubmit={registerHandler} />
            </Route>

            <ProtectedRoute
              path="/profile"
              component={Profile}
              signOut={signOutHandler}
              onSubmit={saveProfileHandler}
            />

            <ProtectedRoute
              path="/movies"
              component={Movies}
              setAlertError={showAlertErrorHandler}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
            />
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </IsLoaddingContext.Provider>
      </IsLoggedContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

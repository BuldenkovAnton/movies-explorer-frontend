import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Page404 from "../Page404/Page404";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function loginHandler({ email, password }) {
    setIsLoading(true);
    console.log("Авторизация");

    setIsLoading(false);
  }

  function registerHandler({ name, email, password }) {
    setIsLoading(true);
    console.log("Регистрация");

    setIsLoading(false);
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/signin">
        <Login onSubmit={loginHandler} isLoading={isLoading} />
      </Route>

      <Route path="/signup">
        <Register onSubmit={registerHandler} isLoading={isLoading} />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;

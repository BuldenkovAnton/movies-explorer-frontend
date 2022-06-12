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
  const [alertError, setAlerError] = useState("");

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

  const signOutHandler = () => {
    console.log("выход");
  };

  const submitHandler = ({ name, email }) => {
    console.log("сохранение", name, email);
  };

  const alertCloseHandler = () => {
    setAlerError("");
  };

  const searchHandler = ({ searchQuery, searchIsMiniMovie }) => {
    console.log("поиск по базе фильмов", searchQuery, searchIsMiniMovie);
  };

  const saveMovieHandler = (movie) => {
    console.log("сохранить фильм", movie);
  };

  const deleteMovieHandler = (movieId) => {
    console.log("удалить фильм", movieId);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/signin">
        <Login
          alertError={alertError}
          alertClose={alertCloseHandler}
          onSubmit={loginHandler}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/signup">
        <Register
          alertError={alertError}
          alertClose={alertCloseHandler}
          onSubmit={registerHandler}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/profile">
        <Profile
          alertError={alertError}
          alertClose={alertCloseHandler}
          signOut={signOutHandler}
          onSubmit={submitHandler}
        />
      </Route>

      <Route path="/movies">
        <Movies
          alertError={alertError}
          alertClose={alertCloseHandler}
          onSearch={searchHandler}
          onSaveMovie={saveMovieHandler}
        />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies
          alertError={alertError}
          alertClose={alertCloseHandler}
          onSearch={searchHandler}
          onDeleteMovie={deleteMovieHandler}
        />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;

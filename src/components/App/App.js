import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../router/index';
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function loginHandler({ email, password }) {
    setIsLoading(true);
    console.log('Авторизация');

    setIsLoading(false);
  }

  function registerHandler({ name, email, password }) {
    setIsLoading(true);
    console.log('Регистрация');

    setIsLoading(false);
  }

  return (
    <Switch>

       <Route path="/signin">
         <Login onSubmit={loginHandler} isLoading={isLoading}/>
       </Route>

       <Route path="/signup">
         <Register onSubmit={registerHandler} isLoading={isLoading}/>
       </Route>

       <Route path="/profile">
         <Profile />
       </Route>

       <Route path="/movies">
         <Movies />
       </Route>

       <Route path="/">
         <Main/>
       </Route>

     {/* {publicRoutes && publicRoutes.map(route =>
          <Route
              component={route.component}
              props={route.props}
              path={route.path}
              exact={route.exact}
              key={route.path}
          />
        )
     } */}

    </Switch>
  );
}

export default App;

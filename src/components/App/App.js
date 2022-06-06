import React from "react";
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../router/index';
import Login from "../Login/Login";
import Register from "../Register/Register";

import './App.css';

function App() {

  function loginHandler({ email, password }) {
    console.log('Авторизация');
  }

  function registerHandler({ name, email, password }) {
    console.log('Регистрация');
  }

  return (
    <Switch>
       <Route path="/signin">
         <Login onSubmit={loginHandler}/>
       </Route>

       <Route path="/signup">
         <Register onSubmit={registerHandler}/>
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

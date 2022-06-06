import React from "react";
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../router/index';
import Login from "../Login/Login";

import './App.css';

function App() {

  function loginHandler({ email, password }) {
    console.log('Авторизация');
  }

  return (
    <Switch>
       <Route path="/signin">
         <Login onSubmit={loginHandler}/>
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

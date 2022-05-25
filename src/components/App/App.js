import React from "react";
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../router/index';

import './App.css';

function App() {

  return (
    <Switch>
     {publicRoutes && publicRoutes.map(route =>
          <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
          />
        )
     }

    </Switch>
  );
}

export default App;

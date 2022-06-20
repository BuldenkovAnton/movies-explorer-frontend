import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";

function ProtectedRoute({ component: Component, ...props }) {
  const isLogged = useContext(IsLoggedContext);

  return (
    <Route>
      {() =>
        isLogged ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  );
}

export default ProtectedRoute;

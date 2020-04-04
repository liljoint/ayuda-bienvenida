import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../context/auth/useAuth";

const PrivateRoutes = ({ children, rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/">
          <Home />
        </PrivateRoutes>
        <PrivateRoutes path="/donar">
          <div>Donar</div>
        </PrivateRoutes>
      </Switch>
    </Router>
  );
};

export default AppRoutes;

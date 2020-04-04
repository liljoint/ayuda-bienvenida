import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SideMenu from "../components/organisms/SideMenu";
import Header from "../components/molecules/Header";
const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/donar">
          <Header />
          <SideMenu />
          <div>Donar</div>
        </PrivateRoutes>
        <PrivateRoutes path="/solicitar">
          <Header />
          <SideMenu />
          <div>Solicitar</div>
        </PrivateRoutes>
        <PrivateRoutes path="/">
          <Header />
          <SideMenu />
          <Home />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
};

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MainContainer from "../pages/MainContainer";
import OfferProduct from "../components/organisms/Forms/OfferProduct/OfferProduct";
import RequestProduct from "../components/organisms/Forms/RequestProduct/RequestProduct";
const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/donar">
          <MainContainer>
            <OfferProduct />
          </MainContainer>
        </PrivateRoutes>
        <PrivateRoutes path="/solicitar">
          <MainContainer>
            <RequestProduct />
          </MainContainer>
        </PrivateRoutes>
        <PrivateRoutes path="/profile">
          <MainContainer>
            <div>Profile</div>
          </MainContainer>
        </PrivateRoutes>
        <PrivateRoutes path="/">
          <MainContainer>
            <Home />
          </MainContainer>
        </PrivateRoutes>
      </Switch>
    </Router>
  );
};

export default AppRoutes;

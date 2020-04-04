import React from "react";
import { node } from "prop-types";
import authContext from "./authContext";
import auth from "../../services/auth/useAuth";

const ProvideAuth = ({ children }) => {
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

ProvideAuth.propTypes = {
  children: node,
};

ProvideAuth.defaultProps = {
  children: undefined,
};

export default ProvideAuth;

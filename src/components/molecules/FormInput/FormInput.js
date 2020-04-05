import React from "react";
import { node, string, any } from "prop-types";
const FormInput = ({ children, name, formik }) => {
  return <>{children}</>;
};

FormInput.propTypes = {
  children: node,
  name: string,
  formik: any,
};
export default FormInput;

import React from "react";
import { node, any } from "prop-types";
import { FormikProvider } from "formik";

const FormikForm = ({ value, children, ...props }) => (
  <FormikProvider value={value} {...props}>
    {children}
  </FormikProvider>
);

FormikForm.propTypes = {
  value: any,
  children: node,
};

export default FormikForm;

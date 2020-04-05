import { useFormik } from "formik";
import validations from "./validations";
import initialValues from "./initialValues";
const useOfferProductFormik = () => {
  return useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit: (values, { setSubmitting, setStatus }) => {
      alert(values);
    },
  });
};

export default useOfferProductFormik;

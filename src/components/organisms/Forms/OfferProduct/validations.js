import * as Yup from "yup";
import { product, quantity } from "../../../../helpers/forms/validation";

export default () =>
  Yup.object().shape({
    product,
    quantity,
  });

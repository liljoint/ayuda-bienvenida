import * as Yup from "yup";

export const email = Yup.string()
  .email("ingrese email")
  .required(
    "Por favor, ingresa el intervalo de días para validar la calidad de la data"
  );

export const product = Yup.number().required("ups, selecciona el producto.");
export const quantity = Yup.number().required("ups, selecciona la cantidad.");

import React from "react";
import { Button, Form } from "semantic-ui-react";
import DropdownFormat from "../../../../helpers/DropdownFormat";
import ProductMock from "../../../../__mocks__/ProductMock";
import useOfferProductFormik from "./useOfferProductFormik";

import FormikForm from "../../../molecules/FormikForm";
import FormDropdown from "../../../molecules/FormDropdown/FormDropdown";
const OfferProduct = () => {
  const products = DropdownFormat(ProductMock);

  const qty = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4",
    },
    {
      id: 5,
      name: "5",
    },
  ];
  const formik = useOfferProductFormik();
  return (
    <FormikForm value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <FormDropdown
          name="product"
          options={products}
          placeholder="Selecciona el Producto"
        />
        <FormDropdown
          name="quantity"
          options={DropdownFormat(qty)}
          placeholder="Selecciona Cantidad"
        />
        <Button type="submit" floated="right" onSubmit={formik.handleSubmit}>
          Agregar
        </Button>
      </Form>
    </FormikForm>
  );
};
export default OfferProduct;

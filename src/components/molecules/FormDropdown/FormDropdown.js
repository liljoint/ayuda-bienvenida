import React from "react";
import { string } from "prop-types";
import { Label, Form } from "semantic-ui-react";
import { useField } from "formik";
import styled from "styled-components";
import Dropdown from "../../atomics/Dropdown";
const FormDropdown = ({ name, label, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  const Container = styled.div`
    display: flex;

    flex-direction: row;
  `;
  return (
    <Form.Field data-testid={`FieldInput__Dropdown--${name}`}>
      <Container>
        {label && label !== "" ? (
          <Label data-testid={`FieldInput__Label--${name}`}>{label}</Label>
        ) : null}

        <Dropdown
          onChange={(e, data) => {
            setValue(data.value);
          }}
          value={field.value}
          {...props}
          data-testid={`DropdownForm__${props.name}`}
        />
      </Container>
      {meta.error && meta.touched ? meta.error : null}
    </Form.Field>
  );
};
FormDropdown.propTypes = {
  name: string,
  label: string,
};
export default FormDropdown;

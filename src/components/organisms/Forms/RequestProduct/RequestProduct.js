import React, { useState } from "react";
import Dropdown from "../../../atomics/Dropdown";
import ProductMock from "../../../../__mocks__/ProductMock";
import DropdownFormat from "../../../../helpers/DropdownFormat";
import useRequestAvailable from "../../../../services/request/useRequestAvailable";
import styled from "styled-components";
import { Card, Button, Icon, Container, Header } from "semantic-ui-react";
import useAuth from "../../../../context/auth/useAuth";
const RequestProduct = () => {
  const [selected, setSelected] = useState(null);
  const [changed, setChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const auth = useAuth();

  const RequestContainer = styled.div``;

  const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3rem;
  `;
  const product = DropdownFormat(ProductMock);

  const { results } = useRequestAvailable(selected);
  const handleChange = (e, data) => {
    if (data.value !== "") {
      setChanged(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    setSelected(data.value);
  };
  return (
    <>
      <RequestContainer>
        <Container text>
          <Header as="h1">Hola {auth.user.name} ! </Header>
          <p>
            Aquí podrás encontrar lo que necesitas, puedes seleccionar desde el
            listado siguiente. También puedes filtrar !
          </p>
          <p>&nbsp;</p>
        </Container>
        <Dropdown
          options={product}
          placeholder="Buscar por producto"
          clearable
          onChange={handleChange}
          value={selected}
          loading={isLoading}
          disabled={isLoading}
          selectOnNavigation={false}
        />
      </RequestContainer>
      <ResultContainer>
        {!isLoading && results && results.length > 0 ? (
          <Card.Group>
            {Object.values(results).map((value, index) => {
              console.log(value);
              return (
                <Card key={index}>
                  <Card.Content>
                    <Card.Header>
                      <Icon name="user" />
                      {value.user}
                    </Card.Header>
                    <Card.Meta>
                      {value.region} / {value.comuna}
                    </Card.Meta>
                    <Card.Description>
                      <p>{value.address}</p>
                      <p>
                        {value.productName} x {value.quantity} Unid.
                      </p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui">
                      <Button basic color="purple">
                        Contactar
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        ) : changed && !isLoading ? (
          "No se encuentran resultados"
        ) : null}
      </ResultContainer>
    </>
  );
};
export default RequestProduct;

import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Divider,
  Header,
  Icon,
  Segment,
  Button,
  Responsive,
  Message,
} from "semantic-ui-react";
import styled from "styled-components";
const Home = () => {
  const Container = styled.div``;

  return (
    <Container>
      <Message positive>
        <Message.Header>Información Completa</Message.Header>
        <p>
          Has completado la información importante, por lo tanto ya puedes Donar
          productos o Solicitar ayuda.
        </p>
      </Message>
      <Message negative>
        <Message.Header>Falta Información</Message.Header>
        <p>
          Debe ingresar la región, comuna y dirección para conectar la
          información. <Link to="/form">Actualizar información</Link>
        </p>
      </Message>
      <Segment compact placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Responsive minWidth={768}>
            <Divider vertical>O</Divider>
          </Responsive>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Donar productos
              </Header>
              <p>
                Tu ayuda es importante, aquí puedes seleccionar tus productos
                para ofrecerlos a gente de tú comuna !
              </p>
              <Link to="/donar">
                <Button color="green">Donar</Button>
              </Link>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Solicitar Ayuda
              </Header>
              <p>
                Necesitas ayuda pra tu bebé? podemos ayudarte, utiliza el
                buscador para contactar a personas que ofrecen ayuda en tu
                comuna.
              </p>
              <Link to="/solicitar">
                <Button color="purple">Solicitar</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};
export default Home;

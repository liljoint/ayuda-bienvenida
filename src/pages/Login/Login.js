import React from "react";
import styled from "styled-components";
import { Card, Image, Button } from "semantic-ui-react";
import Logo from "../../images/logo";
import Footer from "../../components/molecules/Footer";
import useAuth from "../../context/auth/useAuth";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  let location = useLocation();

  const auth = useAuth();
  const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  let { from } = location.state || { from: { pathname: "/" } };

  const handleClick = () => {
    auth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <>
      <Container data-testid="Login__Container">
        <Card>
          <Image src={Logo} wrapped ui={false} />
          <Card.Content textAlign="center">
            <Button color="red" onClick={handleClick}>
              Login
            </Button>
          </Card.Content>
        </Card>
        <Footer />
      </Container>
    </>
  );
};
export default Login;

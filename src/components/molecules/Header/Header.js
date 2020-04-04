import React from "react";
import { Menu, Button, Image, Header as Head } from "semantic-ui-react";
import useSideMenu from "../../../context/sideMenu/useSideMenu";
import useAuth from "../../../context/auth/useAuth";
import logo from "../../../images/logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setOpen] = useSideMenu();
  const auth = useAuth();
  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  const HeadStyle = styled(Head)`
    display: flex;
    vertical-align: center;
    max-height: 5rem;
    margin: 0 auto;
  `;

  const HeaderLink = styled(Link)`
    display: flex;
    flex-direction: row;
  `;
  return (
    <>
      <Menu
        color="red"
        attached="top"
        inverted
        compact
        data-testid="Header__container"
      >
        <Menu.Item as="div">
          <HeaderLink to="/">
            <Image src={logo} size="mini" circular />
            <HeadStyle as="h1">&nbsp;Ayuda Bienvenida</HeadStyle>
          </HeaderLink>
        </Menu.Item>
        <Menu.Item position="right">
          {auth.user.email}
          <Button
            size="large"
            color="red"
            icon="align justify"
            onClick={handleMenuClick}
          />
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Header;

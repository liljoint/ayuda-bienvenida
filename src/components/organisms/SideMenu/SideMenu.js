import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import useSideMenu from "../../../context/sideMenu/useSideMenu";
import useAuth from "../../../context/auth/useAuth";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
const SideMenu = () => {
  const [isOpen, setOpen] = useSideMenu();
  const auth = useAuth();
  let history = useHistory();
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setOpen(false);
    auth.signout(() => history.push("/"));
  };
  const CloseMenuStyle = styled.div`
    flex-direction: row;
    font-weight: bold;
    padding: 6px;
    display: inline-flex;
    min-width: 20px;
    float: right;
    color: white;
    position: relative;
    cursor: pointer;
    z-index: 10;
  `;
  return (
    <Sidebar
      color="grey"
      as={Menu}
      direction="right"
      visible={isOpen}
      animation="overlay"
      vertical
      inverted
      width={"thin"}
    >
      <Sidebar.Pushable style={{ height: "auto" }}>
        <CloseMenuStyle onClick={handleClose}>X</CloseMenuStyle>
      </Sidebar.Pushable>
      <Sidebar.Pusher>
        <Menu.Item as={Link} to="/profile">
          Perfíl
          <Icon name="user" />
        </Menu.Item>
        <Menu.Item as={Link} to="/donar">
          Donar
          <Icon name="gift" />
        </Menu.Item>
        <Menu.Item as={Link} to="/solicitar">
          Solicitar
          <Icon name="globe" />
        </Menu.Item>
        <Menu.Item as="a" onClick={handleLogout}>
          Salir
          <Icon name="sign-out" />
        </Menu.Item>
      </Sidebar.Pusher>
    </Sidebar>
  );
};

export default SideMenu;

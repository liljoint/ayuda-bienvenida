import React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
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
      vertical
      inverted
    >
      <Sidebar.Pushable style={{ height: "auto" }}>
        <CloseMenuStyle onClick={handleClose}>X</CloseMenuStyle>
      </Sidebar.Pushable>
      <Sidebar.Pusher>
        <Link to="/donar" onClick={handleClose}>
          <Menu.Item as="a">Donar</Menu.Item>
        </Link>
        <Link to="/solicitar" onClick={handleClose}>
          <Menu.Item as="a">Solicitar</Menu.Item>
        </Link>
        <Menu.Item as="a" onClick={handleLogout}>
          LogOut
        </Menu.Item>
      </Sidebar.Pusher>
    </Sidebar>
  );
};

export default SideMenu;

import React, { useEffect } from "react";
import Header from "../components/molecules/Header";
import SideMenu from "../components/organisms/SideMenu";
import { node } from "prop-types";
import useSideMenu from "../context/sideMenu/useSideMenu";
import styled from "styled-components";
const MainContainer = ({ children }) => {
  const isOpen = useSideMenu();
  useEffect(() => {
    isOpen[1](false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  const Container = styled.div`
    padding: 2rem;
  `;
  return (
    <>
      <Header />
      <SideMenu />
      <Container>{children}</Container>
    </>
  );
};

MainContainer.propTypes = {
  children: node,
};
export default MainContainer;

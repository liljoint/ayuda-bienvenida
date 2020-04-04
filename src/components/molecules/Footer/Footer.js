import React from "react";
import styled from "styled-components";
const Footer = () => {
  const Container = styled.div`
    display: flex;
    bottom: 0;
    justify-content: center;
  `;
  return (
    <Container>
      From (Someone) With&nbsp;
      <span role="img" aria-label="love">
        &#128151;
      </span>
    </Container>
  );
};

export default Footer;

import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  width: 100vw;

  justify-content: center;
  align-items: center;
  background-color: #0d2235;
  color: #fff;
  padding: 20px;
  font-size: 20px;
  font-weight: 300;

  text-align: center;

  margin-left: auto;
  margin-right: auto;
  font-family: "Lato", sans-serif;
  @media (min-width: 200px) {
    width: 100%;
  }
`;
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

const Footer = () => {
  return (
    <FooterContainer>
      <p> 2023{tab} </p>
      <p> Desarrollado por Juanma Garrido </p>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #0d2235;
  color: #fff;
  padding: 20px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Lato", sans-serif;
  @media (min-width: 200px) {
    display: flex;
    justify-content: center;
  }
`;
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <p> 2023{tab} </p>
        <span> Desarrollado por Juanma Garrido </span>
      </FooterContainer>
    </div>
  );
};

export default Footer;

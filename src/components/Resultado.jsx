import React from "react";
import styled from "@emotion/styled";
const Resultados = styled.div`
  color: #fff;
  font-family: "Lato", Helvetica, sans-serif;
  display: flex;
  align-items: start;
  gap: 1rem;
`;

const Imagen = styled.img`
  max-width: 100px;
  margin-top: 30px;
  margin-left: 2rem;
  display: block;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;
  return (
    <Resultados>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Imagen cripto"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultados>
  );
};

export default Resultado;

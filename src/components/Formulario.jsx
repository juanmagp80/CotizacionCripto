import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect } from "react";
import { useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  background-color: #9497ff;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  // State del listado de criptomonedas
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elige tu criptomoneda",
    cryptos
  );
  //

  const [SelectCriptoMonedas] = useSelectMonedas("Elige tu criptomoneda");
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado.Data);

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          nombre: cripto.CoinInfo.FullName,
          id: cripto.CoinInfo.Name,
        };
        return objeto;
      });
      setCryptos(arrayCriptos);
    };
    consultarApi();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar si ambos campos están llenos
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptomoneda,
    });
    // Pasar los datos al componente principal
  };

  SelectMonedas();
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />

        <SelectCriptoMoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;

import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 12px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
  -webkit-appearance: none;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>

      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectMonedas];
};

export default useSelectMonedas;

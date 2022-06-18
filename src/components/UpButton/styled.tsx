import styled from "styled-components";
import { transparente, transparenteHover } from "../../config/colors";

export const Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
  z-index: 999;
  background-color: ${transparente};
  :hover {
    background-color: ${transparenteHover};
  }
  border-radius: 200%;
  border: 0.1rem solid ${transparenteHover};
  font-size: 24px;
  text-align: center;
  align-items: center;
  padding-top: 1rem;
`;

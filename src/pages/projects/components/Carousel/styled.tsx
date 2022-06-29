import styled from "styled-components";
import {
  linkColor,
  primaryColor,
  primaryDarkColor,
  secondaryDarkColor,
  transparente,
  transparenteHover,
} from "../../../../config/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 1% 39%;
  min-height: 80vh;
  margin-left: 5%;
  max-width: 90%;
  border-top: 6rem solid ${primaryDarkColor};
  border-bottom: 8rem solid ${primaryDarkColor};
  background-color: ${secondaryDarkColor};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Div = styled.div`
  background-color: ${primaryDarkColor};
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;

  @media (max-width: 768px) {
    min-height: 65vh;
    margin-bottom: 4rem;
  }
`;

export const ImagePhoto = styled.ul`
  @media (max-width: 768px) {
    margin: auto;
    display: flex;
  }
`;

export const ImageIcon = styled.ul`
  display: flex;
  margin-top: 1rem;
  padding-bottom: 2rem;
`;

interface Selected {
  isSelected: boolean;
}
export const ImageIconLi = styled.li<Selected>`
  background-color: ${({ isSelected }) =>
    isSelected ? "red" : `${secondaryDarkColor}`};
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  padding-top: 0.4rem;
`;

export const TextArea = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: 1rem;

  h2 a {
    font-size: 26px;
    font-weight: bold;
    color: ${linkColor};

    text-decoration: underline;
  }
`;

export const ButtonL = styled.div`
  position: absolute;
  background-color: ${transparente};
  z-index: 999;
  top: 0;
  margin-top: 15rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background-color: ${transparenteHover};
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 14rem;
    margin-left: 0.4rem;
  }
`;

export const ButtonR = styled.div`
  position: absolute;
  background-color: ${transparente};
  z-index: 999;
  top: 0;
  margin-top: 15rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-left: 50.6%;
  border-radius: 0.5rem;
  font-size: 24px;
  cursor: pointer;
  :hover {
    background-color: ${transparenteHover};
  }
  @media (max-width: 768px) {
    right: 0;
    margin-top: 14rem;
    margin-right: 1.9rem;
  }
`;

import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../../../config/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: 80vh;
  margin-left: 5%;
  max-width: 90%;
  border-top: 8rem solid ${primaryDarkColor};
  border-bottom: 8rem solid ${primaryDarkColor};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    min-height: 60vh;
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
`;

interface Selected {
  isSelected: boolean;
}
export const ImageIconLi = styled.li<Selected>`
  background-color: ${({ isSelected }) =>
    isSelected ? "red" : `${primaryDarkColor}`};
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
`;

export const TextArea = styled.div`
  background-color: ${primaryDarkColor};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ButtonL = styled.div`
  position: absolute;
  background-color: ${primaryColor};
  z-index: 999;
  top: 0;
  margin-top: 21rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.4rem;
  margin-left: 1.2rem;
  border-radius: 2rem;
  font-size: 24px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonR = styled.div`
  position: absolute;
  background-color: ${primaryColor};
  z-index: 999;
  top: 0;
  margin-top: 21rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.4rem;
  margin-left: 48%;
  border-radius: 2rem;
  font-size: 24px;

  @media (max-width: 768px) {
    right: 0;
    margin-right: 1.7rem;
  }
`;

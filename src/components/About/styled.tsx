import styled from "styled-components";
import {
  primaryDarkColor,
  secondaryDarkColor,
  linkColor,
} from "../../config/colors";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: 50vh;
  background-color: ${secondaryDarkColor};
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: 5%;
  max-width: 90%;
  border-top: 8rem solid ${primaryDarkColor};

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 20%;
  margin-right: 10%;
  max-width: 30rem;
  gap: 2rem;
  h2 {
    font-size: 32px;
    color: ${linkColor};
  }
  @media (max-width: 768px) {
    justify-content: left;
    margin-left: 0;
    margin-right: 0;
    max-width: 80%;
  }
`;

export const ContainerImage = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

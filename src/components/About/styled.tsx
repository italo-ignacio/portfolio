import styled from "styled-components";
import {
  primaryDarkColor,
  secondaryDarkColor,
  linkColor,
} from "../../config/colors";

export const Container = styled.section`
  min-height: 50vh;
  background-color: ${secondaryDarkColor};
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: 5%;
  max-width: 90%;
  border-top: 8rem solid ${primaryDarkColor};
  display: grid;
  grid-template-columns: 65% 35%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  gap: 2rem;
  h2 {
    font-size: 32px;
    color: ${linkColor};
  }
  a {
    text-decoration: underline;
    font-size: 16px;
  }
`;

export const ContainerHab = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h4 {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

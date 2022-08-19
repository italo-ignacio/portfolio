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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  gap: 2rem;
  h2 {
    font-size: 32px;
    color: ${linkColor};
  }
  a {
    text-decoration: underline;
    font-size: 16px;
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

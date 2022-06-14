import styled from "styled-components";
import { linkColor } from "../../config/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-top: 10rem;
  margin-left: 5%;
  min-height: 50vh;
  max-width: 90%;
  h2 {
    font-size: 32px;
    color: ${linkColor};
  }
`;

export const ContainerWorks = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

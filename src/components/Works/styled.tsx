import styled from "styled-components";
import { primaryDarkColor, linkColor } from "../../config/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-top: 1rem solid ${primaryDarkColor};

  padding-top: 10rem;
  margin-left: 5%;
  min-height: 50vh;
  max-width: 90%;
  h2 {
    font-size: 32px;
    padding-bottom: 3rem;
    color: ${linkColor};
  }
`;

export const ContainerWorks = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

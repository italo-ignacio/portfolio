import styled from "styled-components";

export const P = styled.p`
  background-color: #fff;
  color: black;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  margin-bottom: 5rem;
  p {
    border: 2px solid black;
    padding: 0.5rem;
    word-wrap: break-word;
  }
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const H2 = styled.h2`
  text-align: center;
`;

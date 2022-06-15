import styled from "styled-components";

export const Body = styled.body`
  min-height: 100vh;
  background-image: url(/bghtml.jpeg);
  background-attachment: fixed;
  background-repeat: no-repeat;

  h2 {
    color: orange;
  }
  h3 {
    color: #2efec8;
  }
  p {
    color: white;
  }
  li {
    font-weight: bold;
    color: white;
  }
`;

export const Main = styled.main`
  background: #000000d1;
  width: 80%;
  margin-left: 10%;
  padding: 10px;

  border-radius: 15px;
  margin-bottom: 15px;
`;

import styled from "styled-components";

export const Container = styled.div`
  h3 {
    padding: 1rem 2rem;
  }
  p {
    padding-bottom: 0.5rem;
  }
  hr {
    margin: 1rem;
  }
  .center {
    text-align: center;
    padding: 1rem;
  }

  .list {
    padding-left: 3rem;
  }
  .table {
    background-color: #3fff00;
    color: black;
    border-radius: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid black;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .list {
      padding-left: 2rem;
    }
    .center {
      text-align: center;
      padding: 0;
      padding-bottom: 1.7rem;
    }
  }
  @media (max-width: 320px) {
    .tr,
    th,
    td {
      display: flex;
    }
  }
`;

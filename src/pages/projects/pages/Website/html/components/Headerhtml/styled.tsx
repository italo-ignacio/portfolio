import styled from "styled-components";

export const Menu = styled.div`
  ul {
    list-style: none;
    background-color: black;
    border-radius: 10px;
  }
  ul li {
    display: inline-block;
    margin: 1px;
    padding: 10px;
  }
  ul li a {
    color: white;
  }

  ul li a:hover {
    color: red;
  }
`;
interface StyledNavProps {
  show: boolean;
}
export const List = styled.ul<StyledNavProps>`
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 77.4%;
    right: 10;
  }
  @media (max-width: 700px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 77%;
    right: 10;
  }
  @media (max-width: 600px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 76.5%;
    right: 10;
  }
  @media (max-width: 500px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 75.8%;
    right: 10;
  }
  @media (max-width: 400px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 74.8%;
    right: 10;
  }
  @media (max-width: 300px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    margin-top: 3.4rem;
    width: 74%;
    right: 10;
  }
`;
export const ListMobile = styled.ul`
  display: none;
  justify-content: space-between;
  font-size: 2rem;
  padding-top: 0.3rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

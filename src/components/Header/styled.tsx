import styled from "styled-components";
import { primaryColor, linkColor } from "../../config/colors";

interface StyledHeaderProps {
  show: boolean;
}
export const Container = styled.header<StyledHeaderProps>`
  width: 100%;
  background: ${primaryColor};
  z-index: 9999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;

  @media (max-width: 768px) {
    padding-left: 1rem;
    display: grid;
    grid-template-columns: auto;
    grid-template-areas: "menu logo tel";
    text-align: center;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    display: flex;
    grid-area: logo;

    padding-left: 4rem;
  }
  margin-top: 3px;
  img {
    width: 7.5rem;

    padding: 0.5rem;
    border-radius: 50%;
  }
`;

export const MenuContent = styled.div`
  position: absolute;
  z-index: 10;
  overflow: hidden;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    position: fixed;
    grid-area: menu;
  }
`;

export const MenuLabel = styled.label`
  font-size: 3rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  z-index: 10;
  color: ${linkColor};
  cursor: pointer;
`;

interface StyledNavProps {
  show: boolean;
}
export const Nav = styled.nav<StyledNavProps>`
  display: flex;
  align-items: center;

  a {
    display: block;
    color: ${linkColor};
    font-weight: bold;
    margin: 0 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${linkColor};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 70%;
    left: 15%;
  }
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 4;
    background-color: ${primaryColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 6rem;
    z-index: 2;
    a {
      width: 100%;
      margin: 2rem 0;
      padding: 0;
    }
    a:hover {
      cursor: pointer;
    }
    a:hover::after {
      width: 0;
    }
  }
`;

export const Nav2 = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: block;
    color: ${linkColor};
    font-weight: bold;

    padding: 1rem;
    font-size: 1.5rem;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${linkColor};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 70%;
    left: 15%;
  }
  @media (max-width: 768px) {
    grid-area: tel;

    a {
      font-size: 2.5rem;
    }
  }
`;

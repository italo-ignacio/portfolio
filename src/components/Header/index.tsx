import { Link } from "react-scroll";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { Nav, Container, Logo, MenuContent, MenuLabel } from "./styled";

export default function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <MenuContent>
          <MenuLabel onClick={toggleMenu}>
            {show ? <FiX /> : <FiMenu />}
          </MenuLabel>
        </MenuContent>
        <Logo>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={toggleMenu}
          >
            <Image src="/avatar.png" width="60px" height="60px" alt="Logo" />
          </Link>
        </Logo>
        <Nav show={show}>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={toggleMenu}
          >
            Sobre mim
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={toggleMenu}
          >
            Trabalhos
          </Link>
          <Link
            activeClass="active"
            to="universityProjects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={toggleMenu}
          >
            Projetos da faculdade
          </Link>
          <Link
            activeClass="active"
            to="personalProjects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={toggleMenu}
          >
            Projetos pessoais
          </Link>
        </Nav>
      </Container>
    </>
  );
}

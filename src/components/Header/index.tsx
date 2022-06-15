import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiPhone } from "react-icons/fi";
import { Nav, Nav2, Container, Logo, MenuContent, MenuLabel } from "./styled";

export default function Header({ project = false }) {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <MenuContent>
          <MenuLabel onClick={toggleMenu}>
            <FiMenu />
          </MenuLabel>
        </MenuContent>
        <Logo>
          <Link href="/">
            <a>
              <Image src="/logo.jpg" width="60px" height="60px" alt="Logo" />
            </a>
          </Link>
        </Logo>
        <Nav show={show}>
          {!project ? (
            <Nav show={show}>
              <a href="#top" onClick={toggleMenu}>
                Sobre mim
              </a>
              <a href="#works" onClick={toggleMenu}>
                Trabalhos
              </a>
              <a href="#personalProjects" onClick={toggleMenu}>
                Projetos pessoais
              </a>
              <a href="#universityProjects" onClick={toggleMenu}>
                Projetos da faculdade
              </a>
            </Nav>
          ) : (
            <Nav show={show}>
              <Link href="/#top">
                <a>Sobre mim</a>
              </Link>
              <Link href="/#works">
                <a>Trabalhos</a>
              </Link>
              <Link href="/#personalProjects">
                <a>Projetos pessoais</a>
              </Link>
              <Link href="/#universityProjects">
                <a>Projetos da faculdade</a>
              </Link>
              <Link href="/">
                <a>Voltar</a>
              </Link>
            </Nav>
          )}
        </Nav>
        {/*
        <Nav2>
          <a
            href="https://api.whatsapp.com/send?phone=5511941901415"
            target="blank"
          >
            <FiPhone />
          </a>
        </Nav2>
        */}
      </Container>
    </>
  );
}

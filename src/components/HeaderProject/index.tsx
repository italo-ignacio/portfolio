import Link from "next/link";
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
          <Link href="/">
            <a>
              <Image src="/avatar.jpg" width="60px" height="60px" alt="Logo" />
            </a>
          </Link>
        </Logo>
        <Nav show={show}>
          <Link href="/#top">
            <a>Sobre mim</a>
          </Link>
          <Link href="/#personalProjects">
            <a>Projetos pessoais</a>
          </Link>
          <Link href="/#universityProjects">
            <a>Projetos da faculdade</a>
          </Link>
          <Link href="/#works">
            <a>Trabalhos</a>
          </Link>

          <Link href="/">
            <a>Voltar</a>
          </Link>
        </Nav>
      </Container>
    </>
  );
}

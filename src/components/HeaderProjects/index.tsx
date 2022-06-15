import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiPhone } from "react-icons/fi";
import { Nav, Nav2, Container, Logo, MenuContent, MenuLabel } from "./styled";

export default function HeaderProjects() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Container show={show}>
        <MenuContent>
          <MenuLabel onClick={toggleMenu}>
            <FiMenu />
          </MenuLabel>
        </MenuContent>
        <Logo>
          <Link href="/">
            <a>
              <Image src="/logo.jpg" width="80px" height="80px" alt="Logo" />
            </a>
          </Link>
        </Logo>
        <Nav show={show}>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </Nav>
        <Nav2>
          <a
            href="https://api.whatsapp.com/send?phone=5511941901415"
            target="blank"
          >
            <FiPhone />
          </a>
        </Nav2>
      </Container>
    </>
  );
}

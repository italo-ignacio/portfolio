import Link from "next/link";
import React, { useState } from "react";
import { Menu, List, ListMobile } from "./styled";
import { FiMenu, FiHome } from "react-icons/fi";

export default function Headerhtml() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <Menu show={show}>
      <List show={show}>
        <li>
          <Link href="/projects/html/pag1">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/pag2">
            <a>Importância da água para o corpo humano</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/pag3">
            <a>O que podemos fazer para economizar</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/pag4">
            <a>Curiosidades e consumo de agua em alguns paises</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/pag5">
            <a>O que mais podemos fazer? </a>
          </Link>
        </li>
        <li>
          <Link href="/projects/website">
            <a>Voltar para projeto</a>
          </Link>
        </li>
      </List>
      <ListMobile>
        <li>
          <Link href="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <a onClick={toggleMenu}>
            <FiMenu />
          </a>
        </li>
      </ListMobile>
    </Menu>
  );
}

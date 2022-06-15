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
    <Menu>
      <List show={show}>
        <li>
          <Link href="/projects/html/pag">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/spag">
            <a>Importância da água para o corpo humano</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/tpag">
            <a>O que podemos fazer para economizar</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/fpag">
            <a>Curiosidades e consumo de agua em alguns paises</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/html/fipag">
            <a>O que mais podemos fazer? </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Voltar para projetos</a>
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

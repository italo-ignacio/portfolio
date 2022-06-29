import React, { useContext } from "react";
import { FaCircle, FaSignOutAlt } from "react-icons/fa";

import { Nav } from "./styled";
import { AuthContext } from "../../contexts/auth";
import Link from "next/link";

export default function Header() {
  const { logout, authenticated, name, id } = useContext(AuthContext);

  const hadleLogout = () => {
    logout();
  };
  return (
    <>
      <Nav id="top">
        <div>
          <Link href="/projects/patrimonies/home">Home</Link>
          {authenticated ? (
            <></>
          ) : (
            <Link href="/projects/patrimonies/register">Registrar</Link>
          )}
          {authenticated ? (
            <></>
          ) : (
            <Link href="/projects/patrimonies/login">Login</Link>
          )}
          {authenticated ? (
            <Link href={`/projects/patrimonies/user/${id}`}>Perfil</Link>
          ) : (
            <></>
          )}

          <label>
            <FaCircle color={authenticated ? "#33FF14" : "red"} />
          </label>

          {authenticated ? (
            <Link href="/projects/patrimonies/register">{name}</Link>
          ) : (
            <></>
          )}
          {authenticated ? (
            <label className="btn_logout" onClick={hadleLogout}>
              <FaSignOutAlt />
            </label>
          ) : (
            <></>
          )}
        </div>
        <div>
          <Link href={"/"}>Tela de início</Link>
        </div>
      </Nav>
    </>
  );
}

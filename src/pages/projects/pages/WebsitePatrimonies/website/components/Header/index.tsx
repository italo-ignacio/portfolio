import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { Nav } from "./styled";
import { AuthContext } from "../../contexts/auth";
import Link from "next/link";

export default function Header() {
  const { logout, authenticated, user } = useContext(AuthContext);

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
            <Link href={`/projects/patrimonies/user/${user.id}`}>Perfil</Link>
          ) : (
            <></>
          )}

          {authenticated ? (
            <Link href="/projects/patrimonies/register">{user.name}</Link>
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
          <Link href={"/"}>Início</Link>
        </div>
      </Nav>
    </>
  );
}

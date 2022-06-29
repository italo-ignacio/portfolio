import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TiDelete } from "react-icons/ti";
import {
  GeneralContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  SearchContainer,
  RegPatrimonyContainer,
  SearchPatrimonyContainer,
  SearchUserContainer,
  ResetUserContainer,
} from "./styled";

import RegPatrimony from "../../components/RegPatrimony";
import { AuthContext } from "../../contexts/auth";
import Patrimony from "../../components/Patrimony";
import UserList from "../../components/UserList";
import axios from "../../services/axios";
import Loading from "../../components/Loading";
import Link from "next/link";

export default function Home() {
  const { loading, authenticated, token } = useContext(AuthContext);
  const [loadingPage, setLoadingPage] = useState(true);
  const [patrimonies, setPatrimonies] = useState([]);
  const [users, setUsers] = useState([]);
  const { query } = useRouter();
  const [searchUser, setSearchUser] = useState("");
  const [searchPatrimony, setSearchPatrimony] = useState("");
  const lowerSearchUser = searchUser.toLowerCase();
  const lowerSearchPatrimony = searchPatrimony.toLowerCase();
  const idSeached = query.userId?.toString() || 0;
  const [totalPatrimonies, setTotalPatrimonies] = useState(0);

  useEffect(() => {
    async function List() {
      const responsePatrimonies = await axios.get(`/patrimony/`);
      const responseUsers = await axios.get("/user");
      setPatrimonies(responsePatrimonies.data);
      setTotalPatrimonies(responsePatrimonies.data.length);
      setUsers(responseUsers.data);
      setLoadingPage(false);
    }
    List();
  }, [totalPatrimonies]);

  const filteredPatrimonies = patrimonies.filter((patrimony) =>
    patrimony.name.toLowerCase().includes(lowerSearchPatrimony)
  );
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(lowerSearchUser)
  );
  const filteredPatrimoniesID = patrimonies.filter(
    (patrimonies) =>
      patrimonies.userId.toString() === query.userId?.toString() || 0
  );

  if (loading) {
    return <Loading />;
  }
  if (loadingPage) {
    return <Loading />;
  }
  return (
    <>
      <GeneralContainer>
        <SearchContainer>
          <RegPatrimonyContainer>
            {authenticated ? <RegPatrimony token={token} /> : <></>}
          </RegPatrimonyContainer>
          <SearchPatrimonyContainer>
            <label>
              Buscar patrimonio:
              <input
                placeholder="Nome do pratrimonio"
                type="text"
                value={searchPatrimony}
                onChange={(e) => {
                  setSearchPatrimony(e.target.value);
                }}
              />
              <button
                className="btn_backspace"
                onClick={() => {
                  setSearchPatrimony("");
                }}
              >
                <TiDelete fontSize={22} />
              </button>
            </label>
          </SearchPatrimonyContainer>
          <SearchUserContainer>
            <label>
              Buscar usuario:
              <input
                placeholder="Nome do usuario"
                type="text"
                value={searchUser}
                onChange={(e) => {
                  setSearchUser(e.target.value);
                }}
              />
              <button
                className="btn_backspace"
                onClick={() => {
                  setSearchUser("");
                }}
              >
                <TiDelete fontSize={22} />
              </button>
            </label>
          </SearchUserContainer>
        </SearchContainer>
        <PrimaryContainer>
          <SecondaryContainer>
            {idSeached === 0
              ? filteredPatrimonies.map((patrimony) => (
                  <Patrimony
                    name={patrimony.name}
                    cod={patrimony.cod}
                    owner={patrimony.owner}
                    ownerId={patrimony.userId}
                    move={true}
                    note={patrimony.note}
                    url={patrimony.url}
                    id={patrimony.id}
                    key={patrimony.id}
                  />
                ))
              : filteredPatrimoniesID.map((patrimony) => (
                  <Patrimony
                    name={patrimony.name}
                    cod={patrimony.cod}
                    owner={patrimony.owner}
                    ownerId={patrimony.userId}
                    move={true}
                    note={patrimony.note}
                    url={patrimony.url}
                    id={patrimony.id}
                    key={patrimony.id}
                  />
                ))}
          </SecondaryContainer>
          <TertiaryContainer>
            <Link href="/projects/patrimonies/home">
              <ResetUserContainer
                selected={query.userId !== undefined ? false : true}
              >
                <div>Todos Patrimonios</div>
                <div>{totalPatrimonies.toString()}</div>
              </ResetUserContainer>
            </Link>

            {filteredUsers.map((user) => (
              <UserList
                key={user.id}
                id={user.id}
                name={user.name}
                patrimonies={user.patrimonies}
                isSelected={
                  idSeached.toString() === user.id.toString() ? true : false
                }
              />
            ))}
          </TertiaryContainer>
        </PrimaryContainer>
      </GeneralContainer>
      <>space</>
    </>
  );
}

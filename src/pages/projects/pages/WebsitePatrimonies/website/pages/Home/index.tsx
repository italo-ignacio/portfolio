import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TiDelete } from "react-icons/ti";
import {
  GeneralContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  RegPatrimonyContainer,
  SearchPatrimonyContainer,
  SearchUserContainer,
  ResetUserContainer,
} from "./styled";

import RegPatrimony from "../../components/RegPatrimony";
import { AuthContext } from "../../contexts/auth";
import Patrimony from "../../components/Patrimony";
import UserList from "../../components/UserList";
import Loading from "../../components/Loading";
import Link from "next/link";
import { Patrimony_, User } from "../../../../../../../../lib/db";

interface DataProps {
  responsePatrimonies: Patrimony_[];
  responseUsers: User[];
}

export default function Home({
  responsePatrimonies,
  responseUsers,
}: DataProps) {
  const { user, authenticated, valid } = useContext(AuthContext);
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
      try {
        setPatrimonies(responsePatrimonies);
        setTotalPatrimonies(responsePatrimonies.length);
        setUsers(responseUsers);
        await valid();
      } catch (error) {
        console.log(error);
      }
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
  const filteredPatrimoniesID = filteredPatrimonies.filter(
    (patrimonies) =>
      patrimonies.userId.toString() === query.userId?.toString() || 0
  );

  return (
    <>
      {loadingPage ? <Loading /> : <></>}
      <GeneralContainer>
        <RegPatrimonyContainer>
          {authenticated ? <RegPatrimony user={user} /> : <></>}
        </RegPatrimonyContainer>
        <br />
        <PrimaryContainer>
          <div>
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
          </div>
          <TertiaryContainer>
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
                patrimonies={user.patrimony.length}
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

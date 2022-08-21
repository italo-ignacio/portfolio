import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";

import {
  UserName,
  UserEmail,
  UserPatrimony,
  PrimaryContainer,
  SecondaryContainer,
  UserContainer,
  RegPatrimonyContainer,
  GeneralContainer,
  PatrimoniesContainer,
  SearchPatrimonyContainer,
} from "./styled";

import RegPatrimony from "../../components/RegPatrimony";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../contexts/auth";
import Patrimony from "../../components/Patrimony";
import Link from "next/link";

export default function User() {
  const router = useRouter();
  const { query } = useRouter();
  const id = query.id;
  const { user, authenticated, token, valid } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [patrimonies, setPatrimonies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPatrimony, setSearchPatrimony] = useState("");
  const lowerSearchPatrimony = searchPatrimony.toLowerCase();

  useEffect(() => {
    const getData = async () => {
      await valid();
      try {
        if (id != undefined) {
          const { data } = await axios.get(`/api/data/user/${id}`);

          setName(data.name);
          setEmail(data.email);
          setPatrimonies(data.patrimony);
          setLoading(false);
        }
      } catch (er) {
        toast.error("Usuario não encontrado");
        setLoading(false);
        router.push("/projects/patrimonies/home");
      }
    };
    getData();
  }, [id, router]);

  const filteredPatrimonies = patrimonies.filter((patrimony) =>
    patrimony.name.toLowerCase().includes(lowerSearchPatrimony)
  );

  return (
    <>
      {loading ? <Loading /> : <></>}
      <GeneralContainer>
        <PrimaryContainer>
          {user != null ? (
            user.id == Number(id) ? (
              <>
                <SecondaryContainer>
                  <Link href={"/projects/patrimonies/register"}>
                    <FaEdit fontSize={25} className="bt" />
                  </Link>
                </SecondaryContainer>
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          <UserContainer>
            <UserName>
              Usuario:
              <label>{name}</label>
            </UserName>
            <UserEmail>
              E-mail:
              <label>{email}</label>
            </UserEmail>
            <UserPatrimony>
              Patrimonios:
              <label>{patrimonies.length.toString()}</label>
            </UserPatrimony>
          </UserContainer>
          {user != null ? (
            user.id == Number(id) ? (
              <>
                <RegPatrimonyContainer>
                  {authenticated ? <RegPatrimony user={user} /> : <></>}
                </RegPatrimonyContainer>
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </PrimaryContainer>
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
        <PatrimoniesContainer>
          {filteredPatrimonies.map((patrimony) => (
            <Patrimony
              name={patrimony.name}
              cod={patrimony.cod}
              ownerId={patrimony.userId}
              owner={name}
              move={false}
              note={patrimony.note}
              url={patrimony.url}
              id={patrimony.id}
              key={patrimony.id}
            />
          ))}
        </PatrimoniesContainer>
      </GeneralContainer>
      <div>space</div>
      <div>space</div>
    </>
  );
}

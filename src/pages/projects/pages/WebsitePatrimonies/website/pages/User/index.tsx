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
  const { name: getOwner, authenticated, token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [patrimony, setPatrimony] = useState("");
  const [patrimonies, setPatrimonies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [searchPatrimony, setSearchPatrimony] = useState("");
  const lowerSearchPatrimony = searchPatrimony.toLowerCase();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/userPatrimonies/${id}`);

        setName(data.name);
        setEmail(data.email);
        setPatrimony(data.qtd);
        setPatrimonies(data.patrimonies);

        if (data.name === getOwner) {
          setIsOwner(true);
        }
      } catch (er) {
        toast.error("Usuario não encontrado");
        router.push("/projects/patrimonies/home");
      }
    };
    getData();
    setLoading(false);
  }, [id, router, getOwner]);
  const filteredPatrimonies = patrimonies.filter((patrimony) =>
    patrimony.name.toLowerCase().includes(lowerSearchPatrimony)
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GeneralContainer>
        <PrimaryContainer>
          {isOwner ? (
            <SecondaryContainer>
              <Link href={"/projects/patrimonies/register"}>
                <FaEdit fontSize={25} className="bt" />
              </Link>
            </SecondaryContainer>
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
              <label>{patrimony}</label>
            </UserPatrimony>
          </UserContainer>
          {isOwner ? (
            <RegPatrimonyContainer>
              {authenticated ? <RegPatrimony token={token} /> : <></>}
            </RegPatrimonyContainer>
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

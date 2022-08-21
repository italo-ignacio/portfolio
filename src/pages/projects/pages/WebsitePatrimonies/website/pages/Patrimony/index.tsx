import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCod,
  PatrymonyOwner,
  PatrymonyNote,
  PatrymonyDetails,
  PrimaryContainer,
  SecondaryContainer,
} from "./styled";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../contexts/auth";
import Image from "next/image";
import Link from "next/link";

export default function Patrimony() {
  const router = useRouter();
  const { query } = useRouter();
  const id = query.id;

  const { user, valid } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getData = async () => {
      await valid();
      try {
        if (id != undefined) {
          const response = await axios.get(`/api/data/patrimony/${id}`);
          const patrimony = response.data;
          setName(patrimony.name);
          setCod(patrimony.cod);
          setNote(patrimony.note);
          setDetails(patrimony.details);
          setOwner(patrimony.owner);
          setImage(patrimony.url);
          setUserId(patrimony.userId);
          setData(true);
          setLoading(false);
        }
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        setLoading(false);
        router.push("/projects/patrimonies/home");
      }
    };
    getData();
  }, [id, router]);

  if (loading) {
    return;
  }

  return (
    <>
      {loading ? <Loading /> : <></>}

      {data ? (
        <>
          <PrimaryContainer>
            {user == undefined ? (
              <></>
            ) : user.is_admin || userId == user.id ? (
              <SecondaryContainer>
                <Link href={`/projects/patrimonies/updatePatrimony/${id}`}>
                  <FaEdit fontSize={25} className="bt" />
                </Link>
              </SecondaryContainer>
            ) : (
              <></>
            )}
            <PatrimonyContainer>
              <PatrymonyImage>
                {image != null ? (
                  <img src={image} alt={name} />
                ) : (
                  <Image
                    src="/projects/patrimonies/not_found.jpg"
                    width={400}
                    height={400}
                  />
                )}
              </PatrymonyImage>
              <PatrymonyName>
                Patrimônio:
                <label>{name}</label>
              </PatrymonyName>
              <PatrymonyCod>
                Código:
                <label>{cod}</label>
              </PatrymonyCod>
              <PatrymonyOwner>
                Dono:
                <label>{owner}</label>
              </PatrymonyOwner>
              <PatrymonyNote>
                Observações:
                <label>{note}</label>
              </PatrymonyNote>
              <PatrymonyDetails>
                Detalhes:
                <label>{details}</label>
              </PatrymonyDetails>
            </PatrimonyContainer>
          </PrimaryContainer>
          <div>space</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

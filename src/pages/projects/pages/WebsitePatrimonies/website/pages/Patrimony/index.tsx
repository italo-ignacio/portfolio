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

  const { isAdmin, name: getOwner } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/patrimony/${id}`);
        const patrimony = response.data;
        setName(patrimony.name);
        setCod(patrimony.cod);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setOwner(patrimony.owner);
        setImage(patrimony.url);
        if (isAdmin || patrimony.owner === getOwner) {
          setIsOwner(true);
        }
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        router.push("/projects/patrimonies/home");
      }
    };
    getData();
    setLoading(false);
  }, [id, router, getOwner, isAdmin]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PrimaryContainer>
        {isOwner ? (
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
            {image != "" ? (
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
  );
}

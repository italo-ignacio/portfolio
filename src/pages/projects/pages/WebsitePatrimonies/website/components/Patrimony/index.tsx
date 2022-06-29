import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCod,
  PatrymonyOwner,
  PatrymonyNote,
} from "./styled";

export default function Patrimony({
  name,
  cod,
  owner,
  note,
  url,
  id,
  ownerId,
  move,
}) {
  return (
    <PatrimonyContainer>
      <PatrymonyImage>
        {url ? (
          <img src={url} alt={name} />
        ) : (
          <Image
            src="/projects/patrimonies/not_found.jpg"
            width={200}
            height={200}
          />
        )}
      </PatrymonyImage>
      <PatrymonyName>
        Patrimônio:
        <label>
          <Link href={`/projects/patrimonies/patrimony/${id}`}>{name}</Link>
        </label>
      </PatrymonyName>
      <PatrymonyCod>
        Código:
        <label>
          <Link href={`/projects/patrimonies/patrimony/${id}`}>{cod}</Link>
        </label>
      </PatrymonyCod>
      <PatrymonyOwner>
        Dono:
        {move ? (
          <label>
            <Link href={`/projects/patrimonies/user/${ownerId}`}>{owner}</Link>
          </label>
        ) : (
          <label>{owner}</label>
        )}
      </PatrymonyOwner>
      <PatrymonyNote>
        Observações:
        <label>{note}</label>
      </PatrymonyNote>
    </PatrimonyContainer>
  );
}

import React from "react";
import Image from "next/image";
import { Container } from "./styled";
import Link from "next/link";

export default function Works({
  title,
  img,
  ow = "",
  fun = "",
  desc,
  link,
  a,
  ...props
}) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <Image src={img} alt="Imagem do projeto" width={350} height={350} />
      </div>
      {ow === "" ? <></> : <p>{ow}</p>}
      {fun === "" ? <></> : <p>{fun}</p>}
      <p>{desc}</p>
      <Link href={link}>
        <a {...props}>{a}</a>
      </Link>
    </Container>
  );
}

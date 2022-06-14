import React from "react";
import Image from "next/image";
import { Container } from "./styled";
import Link from "next/link";

export default function Works({ title, img, desc, link, a }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <Image src={img} alt="Imagem do projeto" width={350} height={350} />
      </div>
      <p>{desc}</p>
      <Link href={link}>
        <a>{a}</a>
      </Link>
    </Container>
  );
}

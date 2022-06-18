import Link from "next/link";
import React from "react";
import Header from "../../../../components/Header";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/Criptografia1.png", width: 558, height: 502 },
  { url: "/projects/Criptografia2.png", width: 556, height: 500 },
];

export default function Cryptography() {
  return (
    <>
      <Header project={true} />
      <Carousel
        images={images}
        elements={
          <>
            <h1>
              <Link href="/projects/html/pag1">
                <a>Criptografia em python</a>
              </Link>
            </h1>
            <br />
            <br />
            <h3></h3>
            <h2>TypeScript </h2>
            <br />
            <br />
            <br />

            <h2>
              <Link href="/projects/html/pag1">
                <a>Ver projeto</a>
              </Link>
              <br />
              <br />
              <br />
              <a
                href="https://github.com/itilocao/criptografia-python"
                target="blank"
              >
                GitHub do projeto
              </a>
              <br />
              <br />
            </h2>
          </>
        }
      />
    </>
  );
}

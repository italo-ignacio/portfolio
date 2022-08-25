import Link from "next/link";
import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/WebsitePatrimony1.png", width: 300, height: 530 },
];

export default function ApiPatrimonies() {
  return (
    <div id="top">
      <HeaderProject />
      <Carousel
        images={images}
        elements={
          <>
            <h1>Projeto API de patrimônios</h1>
            <br />
            <br />
            <h3>
              Api criado com Node.js e express para gerenciar os patrimonios do
              projeto Site de patrimônios
            </h3>
            <br />

            <h2>
              <br />
              <Link href="/projects/patrimonies/home">
                <a>Ver site</a>
              </Link>
              <br />
              <br />
              <a
                href="https://github.com/italo-ignacio/api-patrimonios"
                target="blank"
              >
                GitHub do projeto
              </a>
            </h2>
            <br />
            <br />
            <br />
            <br />
            <div className="des">
              <th>MySql</th>
              <th>Node.js</th>
              <th>Express</th>
            </div>
          </>
        }
      />
    </div>
  );
}

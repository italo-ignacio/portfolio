import Link from "next/link";
import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/WebsitePatrimony1.png", width: 300, height: 530 },
  { url: "/projects/WebsitePatrimony2.png", width: 300, height: 530 },
  { url: "/projects/WebsitePatrimony3.png", width: 300, height: 530 },
];

export default function WebsitePatrimonies() {
  return (
    <div id="top">
      <HeaderProject />
      <Carousel
        images={images}
        elements={
          <>
            <h1>Site de patrimônios</h1>
            <br />
            <br />
            <h3>
              Site criado em React para exibir os patrimonios cadastrados no
              projeto API de patrimônios
            </h3>
            <br />
            <br />
            <h2>
              <Link href="/projects/patrimonies/home">
                <a>Ver site</a>
              </Link>

              <br />
              <br />
              <Link href="/projects/apiPatrimonies">
                <a>Ver api</a>
              </Link>
              <br />
              <br />
              <a
                href="https://github.com/itilocao/site-patrimonios"
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
              <th>React</th>
              <th>Styled components</th>
            </div>
          </>
        }
      />
    </div>
  );
}

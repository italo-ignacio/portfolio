import Link from "next/link";
import React from "react";
import Header from "../../../../components/Header";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/WebsiteHTML1.jpeg", width: 300, height: 450 },
  { url: "/projects/WebsiteHTML2.jpeg", width: 300, height: 450 },
  { url: "/projects/WebsiteHTML1.png", width: 550, height: 450 },
  { url: "/projects/WebsiteHTML2.png", width: 550, height: 450 },
];

export default function Website() {
  return (
    <>
      <Header project={true} />
      <Carousel
        images={images}
        elements={
          <>
            <h1>
              <Link href="/projects/html/pag1">
                <a>Site html/css adaptado para NextJs</a>
              </Link>
            </h1>
            <br />
            <br />
            <h3>
              Inicialmente criado com html/css para um trabalho da faculdade que
              agora foi transcrito para{" "}
            </h3>
            <h2>TypeScript </h2>
            <br />
            <br />
            <br />

            <h2>
              <Link href="/projects/html/pag1">
                <a>Abrir site</a>
              </Link>
              <br />
              <br />
              <br />
              <a href="https://github.com/itilocao/site-html" target="blank">
                GitHub do projeto HTML/CSS
              </a>
              <br />
              <br />
              <a href="https://github.com/itilocao/portfolio" target="blank">
                GitHub do projeto em NextJS
              </a>
            </h2>
          </>
        }
      />
    </>
  );
}

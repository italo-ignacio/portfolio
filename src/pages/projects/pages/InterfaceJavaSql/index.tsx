import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/InterfaceJavaSql1.png", width: 450, height: 540 },
  { url: "/projects/InterfaceJavaSql2.png", width: 450, height: 540 },
  { url: "/projects/InterfaceJavaSql3.png", width: 450, height: 540 },
  { url: "/projects/InterfaceJavaSql4.png", width: 450, height: 540 },
];

export default function InterfaceJavaSql() {
  return (
    <div id="top">
      <HeaderProject />

      <Carousel
        images={images}
        elements={
          <>
            <h1>Progama em JAVA MySQL</h1>
            <br />
            <br />
            <h3>
              Progama em JAVA com MySQL para gerenciar uma faculdade com todos
              alunos, professores, materias e cursos
            </h3>
            <br />
            <br />
            <h2>
              <br />
              <a
                href="https://github.com/itilocao/Projeto-Faculdade"
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
              <th>JAVA</th>
              <th>MySql</th>
            </div>
          </>
        }
      />
    </div>
  );
}

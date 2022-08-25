import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/interfaceJava1.png", width: 450, height: 540 },
  { url: "/projects/interfaceJava2.png", width: 450, height: 540 },
];

export default function InterfaceJava() {
  return (
    <div id="top">
      <HeaderProject />

      <Carousel
        images={images}
        elements={
          <>
            <h1>Progama em JAVA</h1>
            <br />
            <br />
            <h3>Progama em JAVA sobre o meio ambiente com um quiz</h3>
            <br />
            <br />
            <h2>
              <br />

              <a
                href="https://github.com/italo-ignacio/Quiz-Java-Meio-ambiente"
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
            </div>
          </>
        }
      />
    </div>
  );
}

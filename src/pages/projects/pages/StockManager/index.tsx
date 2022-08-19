import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/Manager1.png", width: 450, height: 540 },
  { url: "/projects/Manager2.png", width: 450, height: 540 },
];

export default function StockManager() {
  return (
    <div id="top">
      <HeaderProject />

      <Carousel
        images={images}
        elements={
          <>
            <h1>Gerenciador de estoque</h1>
            <br />
            <br />
            <h3>Gerenciador de estoque e vendas dos produtos</h3>
            <br />
            <br />
            <h2>
              <br />

              <a
                href="https://github.com/itilocao/gerenciador-python"
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
              <th>Python</th>
              <th>SqLite</th>
              <th>Pandas</th>
              <th>TKinter</th>
              <th>Xlsxwriter</th>
              <th>Threading</th>
            </div>
          </>
        }
      />
    </div>
  );
}

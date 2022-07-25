import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/WebsiteWordpress1.png", width: 300, height: 530 },
  { url: "/projects/WebsiteWordpress2.png", width: 300, height: 530 },
  { url: "/projects/WebsiteWordpress3.png", width: 300, height: 530 },
];

export default function WebsiteWordpress() {
  return (
    <div id="top">
      <HeaderProject />
      <Carousel
        images={images}
        elements={
          <>
            <h1>
              <a href="https://vendadefamiliaeamigos.com.br/" target="blank">
                Venda de familia e amigos
              </a>
            </h1>
            <br />
            <br />
            <h3>Loja virtual criada com: </h3>
            <h2>Woocommerce + Wordpress</h2>
            <br />
            <br />
            <br />
            <br />
            <h2>
              <a href="https://vendadefamiliaeamigos.com.br/" target="blank">
                Ver site
              </a>
            </h2>
          </>
        }
      />
    </div>
  );
}

import Link from "next/link";
import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/Criptografia1.png", width: 558, height: 502 },
  { url: "/projects/Criptografia2.png", width: 556, height: 500 },
];

export default function WebsitePatrimonies() {
  return (
    <div id="top">
      <HeaderProject />
      <Carousel
        images={images}
        elements={
          <>
            <h1>Projeto api patrimonio</h1>
            <Link href="/projects/patrimonies/home">
              <h2>Ver site</h2>
            </Link>
          </>
        }
      />
    </div>
  );
}

import Link from "next/link";
import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";

const images = [
  { url: "/projects/WebsitePatrimony1.png", width: 300, height: 530 },
  { url: "/projects/WebsitePatrimony2.png", width: 300, height: 530 },
  { url: "/projects/WebsitePatrimony3.png", width: 300, height: 530 },
  { url: "/projects/WebsitePatrimony4.png", width: 300, height: 530 },
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
            <br />
            <h2>
              <Link href="/projects/patrimonies/home">
                <a>Ver site</a>
              </Link>
            </h2>
          </>
        }
      />
    </div>
  );
}

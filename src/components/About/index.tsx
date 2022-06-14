import React from "react";
import Image from "next/image";
import { ContainerAbout, Container, ContainerImage } from "./styled";

export default function About() {
  return (
    <Container id="about">
      <ContainerAbout>
        <h2>Sobre mim</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptatem cupiditate a vel ullam quasi consectetur rerum ducimus
          praesentium, doloribus, explicabo perspiciatis deleniti architecto
          atque illum repudiandae dolore dolores ut!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          perspiciatis odit veritatis distinctio labore, soluta reprehenderit
          dolorem omnis a ipsam similique eligendi non minima itaque. Atque non
          perferendis natus pariatur?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          perspiciatis odit veritatis distinctio labore, soluta reprehenderit
          dolorem omnis a ipsam similique eligendi non minima itaque. Atque non
          perferendis natus pariatur?
        </p>
      </ContainerAbout>
      <ContainerImage>
        <Image
          src="/dogao.jpg"
          alt="Picture of the author"
          width={420}
          height={500}
        />
      </ContainerImage>
    </Container>
  );
}

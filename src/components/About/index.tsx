import React from "react";
import Image from "next/image";
import { ContainerAbout, Container, ContainerImage } from "./styled";

export default function About() {
  return (
    <Container id="top">
      <ContainerAbout>
        <h2>Sobre mim</h2>
        <p>
          Sou o Italo, tenho 1 ano de experiência no mercado de trabalho, sendo
          9 meses como programador Python, onde desenvolvi um sistemas de
          gerenciamento de estoque e vendas de produtos. E 3 meses como
          desenvolvedor web utilizando WordPress.
        </p>
        <p>
          Desenvolvi um projeto pessoal de sistema full-stack utilizando o
          Framework Express do Nodejs para criar a API e a biblioteca React para
          criar o front-end e consumir a API.
        </p>
        <p>
          Criei este website utilizando o Framework Next.js para exibir meus
          projetos e experiências como desenvolvedor tanto os projetos pessoais
          e da faculdade como os trabalhos
        </p>
        <p>
          Os códigos dos projetos estão no meu{" "}
          <a href="https://github.com/itilocao" target="blank">
            GitHub
          </a>
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

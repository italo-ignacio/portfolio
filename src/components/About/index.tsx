import React from "react";
import { ContainerAbout, Container, ContainerHab } from "./styled";

export default function About() {
  return (
    <Container id="top">
      <ContainerAbout>
        <h2>Sobre mim</h2>
        <p>
          Sou o Italo, tenho 1 ano de experiência no mercado de trabalho, sendo
          9 meses como programador Python, onde desenvolvi um sistema de
          gerenciamento de estoque e vendas de produtos. E 3 meses como
          desenvolvedor web utilizando WordPress.
        </p>
        <p>
          Desenvolvi um projeto pessoal de um sistema full-stack utilizando o
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
          <a href="https://github.com/italo-ignacio" target="blank">
            GitHub
          </a>
        </p>
      </ContainerAbout>
      <ContainerHab>
        <h2>Habilidades</h2>
        <br />
        <h4>NextJs </h4>
        <h4>React </h4>
        <h4>SQL </h4>
        <h4>GitHub </h4>
        <h4>JavaScript </h4>
        <h4>TypeScript </h4>
        <h4>Python </h4>
        <h4>NODE.JS </h4>
        <h4>API </h4>
        <h4>Prisma </h4>
        <h4>PlanetScale </h4>
        <h4>HTML </h4>
        <h4>CSS </h4>
        <h4>JAVA </h4>
        <h4>Spring </h4>
        <h4>Orientação a objetos </h4>
      </ContainerHab>
    </Container>
  );
}

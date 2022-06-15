import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";

export default function University() {
  return (
    <Container id="universityProjects">
      <h2>Projetos da faculdade</h2>
      <ContainerWorks>
        <Box
          title="Website"
          img="/html.png"
          ow="Projeto: 1° semestre"
          fun="Aprendizagem: HTML/CSS"
          desc="Descrição: Site criado em html/css sobre o meio ambiente"
          link="/projects/html/pag1"
          a="Ver projeto"
        />
        <Box
          title="Criptografia "
          img="/python.svg"
          ow="Projeto: 2° semestre"
          fun="Aprendizagem: Python"
          desc="Descrição: Programa para criptografar e descriptografar mensagens"
          link="/projects/cryptography"
          a="Ver projeto"
        />
        <Box
          title="Progama em JAVA"
          img="/java.png"
          ow="Projeto: 3° semestre"
          fun="Aprendizagem: Java"
          desc="Descrição: Intercafe criada em java com um Quiz sobre o meio ambiente"
          link="/projects/interfaceJava"
          a="Ver projeto"
        />
      </ContainerWorks>
    </Container>
  );
}

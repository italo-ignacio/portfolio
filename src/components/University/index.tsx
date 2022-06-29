import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";
import Link from "next/link";

export default function University() {
  return (
    <Container>
      <h2 id="universityProjects">Projetos da faculdade</h2>
      <ContainerWorks>
        <Box
          title="Website"
          img="/html.png"
          elements={
            <>
              <p>Projeto: 1° semestre</p>
              <p>Aprendizagem: HTML/CSS</p>
              <p>Descrição: Site criado em html/css sobre o meio ambiente </p>

              <Link href="/projects/html/pag1">
                <a>Abrir site</a>
              </Link>
              <Link href="/projects/website">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
        <Box
          title="Criptografia "
          img="/python.svg"
          elements={
            <>
              <p>Projeto: 2° semestre</p>
              <p>Aprendizagem: Python</p>
              <p>
                Descrição: Programa para criptografar e descriptografar qualquer
                mensagens.
                <br /> Basado na Cifra de César
              </p>
              <Link href="/projects/cryptography">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
        <Box
          title="Progama em JAVA"
          img="/java.png"
          elements={
            <>
              <p>Projeto: 3° semestre</p>
              <p>Aprendizagem: Java</p>
              <p>
                Descrição: Intercafe criada em java com um Quiz sobre o meio
                ambiente e uma área para calcular seu consumo de água
              </p>
              <Link href="/projects/interfaceJava">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
        <Box
          title="JAVA com MySQL"
          img="/mysql.png"
          elements={
            <>
              <p>Projeto: 3° semestre</p>
              <p>Aprendizagem: Java</p>
              <p>
                Descrição: Intercafe criada em java para gerenciar uma faculdade
                relacionando os professores, alunos e diciplinas com MySQL
              </p>
              <Link href="/projects/interfaceJava">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
      </ContainerWorks>
    </Container>
  );
}

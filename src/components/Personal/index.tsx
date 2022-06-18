import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";
import Link from "next/link";

export default function Personal() {
  return (
    <Container id="personalProjects">
      <h2>Projetos pessoais</h2>
      <ContainerWorks>
        <Box
          title="Este website"
          img="/nextjs.png"
          elements={
            <>
              <p>Aprendizagem: Next.js</p>
              <p>
                Descrição: Site criado com o Framework Next.js para exibir meus
                projetos
              </p>
              <p></p>
              <a href="https://github.com/itilocao/portfolio" target="blank">
                Ver projeto no GitHub
              </a>
            </>
          }
        />
        <Box
          title="Site de patrimônios"
          img="/logo-react-icon.png"
          elements={
            <>
              <p>Aprendizagem: React</p>
              <p>
                Descrição: Site criado com React para exibir os patrimônios e
                usuários cadastrados no banco de dados da API de patrimônios
              </p>
              <p></p>
              <Link href="/projects/websitePatrimonies">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
        <Box
          title="API de patrimônios"
          img="/nodejs.png"
          elements={
            <>
              <p>Aprendizagem: Node.js/Express.js</p>
              <p>
                Descrição: API criada com NodeJs e ExpressJs para gerenciar os
                patrimônios e usuários que seram listado no Site de patrimônios
              </p>
              <p></p>
              <Link href="/projects/apiPatrimonies">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
      </ContainerWorks>
    </Container>
  );
}

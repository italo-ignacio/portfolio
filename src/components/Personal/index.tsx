import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";

export default function Personal() {
  return (
    <Container id="personalProjects">
      <h2>Projetos pessoais</h2>
      <ContainerWorks>
        <Box
          title="Este website"
          img="/nextjs.png"
          ow=" "
          fun="Aprendizagem: Next.js"
          desc="Descrição: Site criado com o Framework Next.js para exibir meus projetos"
          link="https://github.com/itilocao/portfolio"
          a="Ver projeto no GitHub"
          target="blank"
        />
        <Box
          title="Site de patrimônios"
          img="/logo-react-icon.png"
          ow=""
          fun="Aprendizagem: React"
          desc="Descrição: Site criado com React para exibir os patrimônios e usuários cadastrados no banco de dados da API de patrimônios"
          link="/projects/websitePatrimonies"
          a="Ver projeto"
        />
        <Box
          title="API de patrimônios"
          img="/nodejs.png"
          ow=""
          fun="Aprendizagem: Node.js/Express.js"
          desc="Descrição: API criada com NodeJs e ExpressJs para gerenciar os patrimônios e usuários que seram listado no Site de patrimônios"
          link="/projects/apiPatrimonies"
          a="Ver projeto"
        />
      </ContainerWorks>
    </Container>
  );
}

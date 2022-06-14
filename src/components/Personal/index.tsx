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
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/"
          a="Ver projeto no GitHub"
        />
        <Box
          title="Website de patrimônios"
          img="/logo-react-icon.png"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/"
          a="Ver projeto"
        />
        <Box
          title="API de patrimônios"
          img="/nodejs.png"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/"
          a="Ver projeto"
        />
      </ContainerWorks>
    </Container>
  );
}

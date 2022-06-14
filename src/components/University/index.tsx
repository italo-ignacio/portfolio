import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";

export default function University() {
  return (
    <Container id="universityProjects">
      <h2>Projetos da faculdade</h2>
      <ContainerWorks>
        <Box
          title="Website meio ambiente"
          img="/html.png"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/"
          a="Ver projeto"
        />
        <Box
          title="Progama sobre o meio ambiente"
          img="/java.png"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/"
          a="Ver projeto"
        />
        <Box
          title="Criptografia de mensagens"
          img="/python.svg"
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

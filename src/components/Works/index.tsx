import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";

export default function Works() {
  return (
    <Container id="works">
      <h2>Trabalhos</h2>
      <ContainerWorks>
        <Box
          title="Website Wordpress"
          img="/wordpress.png"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/projects/websiteWordpress"
          a="Ver projeto"
        />
        <Box
          title="Gerenciador de estoque"
          img="/python.svg"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia quis
        doloribus laudantium ipsa autem nobis animi excepturi doloremque
        distinctio delectus officiis facere officia minus, quo similique ut est
        velit."
          link="/projects/stockManager"
          a="Ver projeto"
        />
      </ContainerWorks>
    </Container>
  );
}

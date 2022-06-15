import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";

export default function Works() {
  return (
    <Container id="works">
      <h2>Trabalhos</h2>
      <ContainerWorks>
        <Box
          title="Woocommerce + Wordpress"
          img="/wordpress.png"
          ow="Empresa: Venda de familia e amigos"
          fun="Função : Desenvolvedor"
          desc="Descrição: Loja virtual  Woocommerce criada com o wordpress "
          link="/projects/websiteWordpress"
          a="Ver projeto"
        />
        <Box
          title="Gerenciador de estoque"
          img="/python.svg"
          ow="Empresa: Venda de familia e amigos"
          fun="Função: Desenvolvedor"
          desc="Descrição: Programa para gerenciar estoque e vendas de produtos"
          link="/projects/stockManager"
          a="Ver projeto"
        />
      </ContainerWorks>
    </Container>
  );
}

import React from "react";
import { Container, ContainerWorks } from "./styled";
import Box from "../Box";
import Link from "next/link";

export default function Works() {
  return (
    <Container>
      <h2 id="works">Trabalhos</h2>
      <ContainerWorks>
        <Box
          title="Woocommerce + Wordpress"
          img="/wordpress.png"
          elements={
            <>
              <p>Empresa: Venda de familia e amigos</p>
              <p>Função : Desenvolvedor</p>
              <p>Descrição: Loja virtual Woocommerce criada com o wordpress</p>
              <Link href="/projects/websiteWordpress">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
        <Box
          title="Gerenciador de estoque"
          img="/python.svg"
          elements={
            <>
              <p>Empresa: Venda de familia e amigos</p>
              <p>Função : Desenvolvedor</p>
              <p>
                Descrição: Programa para gerenciar estoque e vendas de produtos
              </p>
              <Link href="/projects/stockManager">
                <a>Ver projeto</a>
              </Link>
            </>
          }
        />
      </ContainerWorks>
    </Container>
  );
}

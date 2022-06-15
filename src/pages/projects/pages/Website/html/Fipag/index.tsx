import React from "react";
import { Body, Main } from "../components/styles.module/styles";
import Headerhtml from "../components/Headerhtml";
import { Container } from "./styled";

const Fipag = () => {
  return (
    <Body id="top">
      <Main>
        <Headerhtml />
        <Container>
          <h3>O que mais podemos fazer?</h3>
          <p>
            Economizar água no dia a dia – apesar de algo ainda muito importante
            – não é a única ação que podemos fazer para conservar as reservas de
            água do nosso planeta. É preciso estimular o uso de técnicas de
            irrigação que conservem água, tais como o gotejamento, em que
            máquinas específicas distribuem apenas a quantidade de gostas
            necessária para a sobrevivência do vegetal que está sendo cultivado.
          </p>
          <p>
            Além disso, a conservação dos solos é importante, pois, durante as
            chuvas, o solo sem vegetação passa por erosões, levando terra para
            os rios, que ficam assoreados e, às vezes, inutilizados. Em outros
            casos, o uso de agrotóxicos em excesso faz com que parte dos
            líquidos utilizados “escorra” em direção aos cursos d&apos;água
            através das chuvas, poluindo os rios e deixando-os inutilizáveis.
          </p>
          <p>
            Nas indústrias também é necessária a adoção de medidas de
            conservação. Dependendo do produto ou mercadoria que se está
            produzindo, é possível até mesmo reutilizar a água e evitar, também,
            que rejeitos e poluentes emitidos cheguem até os rios. Com isso, a
            disponibilidade hídrica poderá deixar de ser um problema para o
            futuro.
          </p>
          <hr />
        </Container>
      </Main>
    </Body>
  );
};

export default Fipag;

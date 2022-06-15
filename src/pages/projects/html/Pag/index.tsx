import Image from "next/image";
import React from "react";
import Headerhtml from "../components/Headerhtml";
import { Body, Main } from "../components/styles/styles";
import { Container } from "./styled";

const Pag = () => {
  return (
    <Body>
      <Main>
        <Headerhtml />
        <Container>
          <div className="center">
            <h1>Tudo sobre a água</h1>

            <Image src="/images.jpg" alt="Agua" width={299} height={168} />
          </div>

          <h3>Introdução ao tema</h3>
          <p>
            A água é um recurso natural abundante essencial para a existência de
            vida na Terra. O planeta Terra é constituído por uma extensa massa
            de água, correspondendo ao que conhecemos como hidrosfera.Além de
            estar presente na composição do planeta, a água também compõe parte
            do nosso corpo, permitindo-nos pensar que falar de água é falar de
            sobrevivência. Essa substância é utilizada em atividades essenciais
            ao ser humano, como a produção agrícola, e também usada como
            solvente universal. A água era considerada um recurso inesgotável.
            Contudo, desde que foi considerada um símbolo de riqueza, por ter
            sido transformada em uma mercadoria, passou também a ser sinônimo de
            conflito. O mau uso, o desperdício, sua distribuição, bem como sua
            ocorrência são responsáveis por criar conflitos em diversas regiões
            do mundo. A preocupação com a disponibilidade de água é pauta
            frequente nas discussões ambientais e geopolíticas.
          </p>
          <hr />
          <h3>Água Do Planeta</h3>
          <p>
            O planeta Terra está inundado de água, formando a hidrosfera,
            compreendendo os oceanos, mares e águas continentais.
            Aproximadamente 71% da superfície terrestre é coberta por água,
            totalizando cerca de 1,4 bilhão de km3. É considerado o único
            planeta que apresenta a água em seus três estados físicos: gasoso,
            líquido e sólido. De toda a água disponível no planeta, 97% é água
            salgada. Apenas 3% da água disponível é doce.
          </p>
          <hr />
        </Container>
      </Main>
    </Body>
  );
};

export default Pag;

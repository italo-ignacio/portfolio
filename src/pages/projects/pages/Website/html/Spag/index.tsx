import Image from "next/image";
import React from "react";
import { Body, Main } from "../components/styles.module/styles";
import Headerhtml from "../components/Headerhtml";
import { Container } from "./styled";

const Spag = () => {
  return (
    <Body id="top">
      <Main>
        <Headerhtml />

        <Container>
          <div className="center">
            <h3>Importância da água para o corpo humano</h3>
            <Image src="/corpo.jpg" alt="corpo" width={355} height={700} />
          </div>
          <p className="p">
            A água é essencial para o funcionamento do corpo humano e também do
            corpo de outros animais. Para se ter ideia da importância dessa
            substância, devemos entender primeiro a composição do nosso
            organismo, o qual apresenta entre 60% a 75% de água. Essa grande
            quantidade de água é fundamental para a realização de processos
            básicos, tais como:
          </p>
          <ul className="list">
            <li>
              <p>
                Transporte de nutrientes para as células. Isso acontece devido
                ao fato de que a água é um dos componentes do plasma sanguíneo.
              </p>
            </li>
            <li>
              <p>
                do nosso corpo. Nesse ponto a água atua por fazer parte da
                composição do suor, o qual ao evaporar reduz a temperatura do
                nosso corpo.
              </p>
            </li>
            <li>
              <p>
                Fundamental para a realização de diversas reações químicas que
                ocorrem em nosso corpo.
              </p>
            </li>
            <li>
              <p>
                Atua na proteção do nosso organismo. A água está presente, por
                exemplo, nos fluidos das articulações e no líquido amniótico,
                que protege o feto durante o desenvolvimento.
              </p>
            </li>
            <li>
              <p>
                Atua em vários pontos do processo de digestão, estando presente,
                por exemplo, na saliva.
              </p>
            </li>
            <li>
              <p>
                Eliminação de substâncias. A água está presente em grande
                quantidade na urina, a qual apresenta substâncias que são
                tóxicas ou estão em excesso em nosso corpo.
              </p>
            </li>
          </ul>
          <hr />
        </Container>
      </Main>
    </Body>
  );
};

export default Spag;

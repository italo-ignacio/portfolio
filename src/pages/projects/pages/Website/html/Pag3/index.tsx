import React from "react";
import { Body, Main } from "../components/styles.module/styles";
import Headerhtml from "../components/Headerhtml";
import { Container } from "./styled";

const Pag3 = () => {
  return (
    <Body id="top">
      <Main>
        <Headerhtml />

        <Container>
          <h3>Mas quais são as atividades que mais consomem água?</h3>
          <p className="p">
            Segundo a Organização das Nações Unidas para a Agricultura e
            Alimentação (FAO), a atividade que mais consome água é a
            agropecuária. Sozinho, esse setor é responsável por 70% da água
            utilizada pelo ser humano, seguido pela indústria, com 22%, e, por
            último, o uso doméstico, com 8%.
          </p>
          <table>
            <tr>
              <th className="or">Agropecuária</th>
              <td className="or">70%</td>
            </tr>
            <tr>
              <th className="rd">Indústria </th>
              <td className="rd">22%</td>
            </tr>
            <tr>
              <th className="yl">Uso doméstico</th>
              <td className="yl">8%</td>
            </tr>
          </table>

          <hr />
          <h3>E como podemos economizar?</h3>
          <ol className="list">
            <li>
              <h4>Tome banhos mais curtos.</h4>
              <p>
                Se cada pessoa de São Paulo reduzissem em cinco minutos o tempo
                de banho diário, daria para economizar 26,8 bilhões de litros de
                água por mês.
              </p>
            </li>
            <li>
              <h4> Cuidado com os vazamentos.</h4>
              <p>
                Por mês, 96 mil litros de água potável são desperdiçados por um
                buraco de dois milímetros em um cano. A quantidade de um dia é
                capaz de lavar todas as roupas em uma só lavagem na máquina de
                lavar.
              </p>
            </li>
            <li>
              <h4>Não utilize a mangueira.</h4>
              <p>
                Seja para lavar o carro ou regar as plantas, não utilize a
                mangueira: se usada por 15 minutos, ela consome 180 litros de
                água. Para lavar o carro, prefira um pano úmido e balde e, para
                regar, um regador.
              </p>
            </li>
            <li>
              <h4>Use a vassoura para limpar a calçada.</h4>
              <p>
                Não utilize a mangueira para lavar a calçada; além de
                desnecessário, o consumo de água é grande. Prefira uma vassoura
                ou água de reuso.
              </p>
            </li>
            <li>
              <h4>Lave a roupa com menos frequência e mais atenção.</h4>
              <p>
                Ligue a máquina de lavar roupas apenas quando ela estiver
                completamente cheia; o consumo de uma máquina de cinco litros é
                de 135 litros a cada uso. Você também pode deixar a roupa
                acumular e lavar tudo de uma só vez.
              </p>
            </li>
          </ol>
          <hr />
        </Container>
      </Main>
    </Body>
  );
};

export default Pag3;

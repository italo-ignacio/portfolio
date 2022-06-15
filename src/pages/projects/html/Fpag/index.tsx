import React from "react";
import { Body, Main } from "../components/styles/styles";
import Headerhtml from "../components/Headerhtml";
import { Container } from "./styled";

const Fpag = () => {
  return (
    <Body>
      <Main>
        <Headerhtml />
        <Container>
          <h3>Curiosidades sobre a água</h3>
          <ol className="list">
            <li>
              <p>
                Apenas 3% da água do mundo é doce. Deste total, 70% está na
                forma de gelo ou no solo.
              </p>
            </li>
            <li>
              <p>
                Existe mais água na atmosfera do que em todos os rios do mundo
                juntos.
              </p>
            </li>
            <li>
              <p>
                Uma torneira que goteja a cada segundo pode vazar três mil
                litros em um ano.
              </p>
            </li>
            <li>
              <p>
                Para fazer uma calça jeans são necessários, aproximadamente, dez
                mil litros de água.
              </p>
            </li>
            <li>
              <p>
                Para produzir um quilo de manteiga são necessários 18 mil litros
                de água e para um quilo de carne gasta-se 15.400 litros.
              </p>
            </li>
            <li>
              <p>
                Um banho de 15 minutos, com o registro meio aberto, consome 135
                litros de água.
              </p>
            </li>
            <li>
              <p>
                Uma mangueira aberta pode desperdiçar até 280 litros de água em
                15 minutos.
              </p>
            </li>
            <li>
              <p>Um adulto bebe cerca de 1000 litros de água anualmente.</p>
            </li>
            <li>
              <p>
                Um litro de gasolina é o suficiente para contaminar 700 mil
                litros de água.
              </p>
            </li>
            <li>
              <p>
                Uma pessoa consegue sobreviver cerca de um mês sem comida. No
                entanto, consegue sobreviver apenas uma semana sem água.
              </p>
            </li>
          </ol>
          <hr />
          <div className="center">
            <h3>Consumo de água em alguns países</h3>
            <table className="table">
              <tr>
                <th> Países </th>
                <th> Consumo per capita (litros/dia para cada habitante)</th>
              </tr>
              <tr>
                <td>Estados unidos </td>
                <td>575 </td>
              </tr>
              <tr>
                <td> Itália </td>
                <td> 385</td>
              </tr>
              <tr>
                <td> México </td>
                <td> 365 </td>
              </tr>
              <tr>
                <td>Noruega </td>
                <td> 300 </td>
              </tr>
              <tr>
                <td> Alemanha </td>
                <td> 195 </td>
              </tr>
              <tr>
                <td> Brasil </td>
                <td> 185 </td>
              </tr>
              <tr>
                <td> Índia </td>
                <td>135 </td>
              </tr>
              <tr>
                <td>China </td>
                <td> 85</td>
              </tr>
              <tr>
                <td>Gana </td>
                <td>35 </td>
              </tr>
              <tr>
                <td>Etiópia/Haiti </td>
                <td> 15 </td>
              </tr>
            </table>
          </div>
          <hr />
        </Container>
      </Main>
    </Body>
  );
};

export default Fpag;

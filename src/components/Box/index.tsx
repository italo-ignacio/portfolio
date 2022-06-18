import React, { ReactElement } from "react";
import Image from "next/image";
import { Container } from "./styled";

interface AllProps {
  title: string;
  img: string;
  elements: ReactElement;
}

const Box = (props: AllProps) => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <div>
        <Image
          src={props.img}
          alt="Imagem da linguagem"
          width={150}
          height={150}
        />
      </div>
      {props.elements}
    </Container>
  );
};
export default Box;

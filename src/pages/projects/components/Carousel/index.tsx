import React, { ReactElement, useState } from "react";
import {
  Container,
  ImageArea,
  TextArea,
  ButtonR,
  ButtonL,
  ImageIcon,
  ImageIconLi,
  ImagePhoto,
} from "./styled";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

interface ImageProps {
  url: string;
  width: number;
  height: number;
}

interface AllProps {
  images: ImageProps[];
  elements: ReactElement;
}
const Carousel = (props: AllProps) => {
  const [img, setImg] = useState(0);

  const HandleClickR = async () => {
    setImg(img < props.images.length - 1 ? img + 1 : 0);
  };
  const HandleClickL = () => {
    setImg(img > 0 ? img - 1 : props.images.length - 1);
  };
  const HandleChange = (index) => {
    setImg(index);
  };

  return (
    <>
      <Container>
        <ImageArea>
          <ImagePhoto>
            <Image
              src={props.images[img].url}
              alt="Picture of the author"
              width={props.images[img].width}
              height={props.images[img].height}
            />
          </ImagePhoto>
          <ImageIcon>
            {props.images.map((image, index) => (
              <ImageIconLi
                isSelected={index === img ? true : false}
                onClick={() => {
                  HandleChange(index);
                }}
                key={index}
              >
                <Image
                  src={image.url}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                />
              </ImageIconLi>
            ))}
          </ImageIcon>
        </ImageArea>

        <TextArea>{props.elements}</TextArea>
        <ButtonL onClick={HandleClickL}>
          <a>
            <FiArrowLeft />
          </a>
        </ButtonL>
        <ButtonR onClick={HandleClickR}>
          <a>
            <FiArrowRight />
          </a>
        </ButtonR>
      </Container>
    </>
  );
};

export default Carousel;

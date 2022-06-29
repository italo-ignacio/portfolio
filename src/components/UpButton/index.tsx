import React from "react";
import { Button } from "./styled";
import { Link } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";

const UpButton = () => {
  return (
    <Link
      activeClass="active"
      to="top"
      spy={true}
      smooth={true}
      offset={-10}
      duration={500}
    >
      <Button>
        <FiArrowUp />
      </Button>
    </Link>
  );
};

export default UpButton;

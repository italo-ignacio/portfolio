import React from "react";
import { Button } from "./styled";
import { FiArrowUp } from "react-icons/fi";

const UpButton = () => {
  return (
    <Button>
      <a href="#top">
        <FiArrowUp />
      </a>
    </Button>
  );
};

export default UpButton;

import React from "react";
import style from "./button.module.css";
import { ArrowDown2, Messages3 } from "iconsax-react";

const Button = ({ onClick, color, className, isOpen }) => {
  return (
    <div
      className={`${style.buttonContainer} ${className} ${isOpen ? style.isOpen : ''}`}
      onClick={onClick}
      data-testid="button-container"
    >
      {isOpen ? (
        <ArrowDown2 size="24" color={color} />
      ) : (
        <Messages3 size="24" color={color} />
      )}
    </div>
  );
};

export default Button;

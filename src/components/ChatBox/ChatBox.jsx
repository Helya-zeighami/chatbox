import React, { useState } from "react";
import Button from "../Button/Button";
import ChatModal from "../ChatModal/ChatModal";
import style from "./chatBox.module.css";

const ChatBox = ({ greetingMessage, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getPositionClass = () => {
    switch (position) {
      case "bottom-left":
        return style.bottomLeft;
      case "bottom-right":
        return style.bottomRight;
      default:
        return "";
    }
  };

  return (
    <div className={style.container}>
      <div className={`${style.chatBox} ${getPositionClass()}`}>
        <ChatModal
          message={greetingMessage}
          className={` ${!isOpen ? style.close : ""}`}
        />
        <Button onClick={handleClick} color="#fff" isOpen={isOpen} />
      </div>
    </div>
  );
};

export default ChatBox;

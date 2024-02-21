import React from "react";
import style from "./chatModal.module.css";
import Input from "../Input/Input";
import ChatView from "../ChatView/ChatView";

const ChatModal = ({ className, message }) => {
  return (
    <div className={className}>
      <div className={style.chatContainer}>
        <ChatView message={message} className={className}/>
        <Input />
      </div>
    </div>
  );
};

export default ChatModal;

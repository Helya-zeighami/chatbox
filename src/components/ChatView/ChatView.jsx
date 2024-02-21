import React from "react";
import style from "./chatView.module.css";

const ChatView = ({ message, className }) => {
  return (
    <div className={`${style.chat} ${className}`}>
      <p className={style.typography}>{message}</p>
    </div>
  );
};

export default ChatView;

import React from "react";
import style from "./input.module.css";
const Input = () => {
  return (
    <div className={style.inputContainer}>
      <form action="">
        <input
          type="text"
          placeholder="Write something"
          className={style.input}
          data-testid="input-container"
        />
      </form>
    </div>
  );
};

export default Input;

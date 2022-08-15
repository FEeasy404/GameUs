import React from "react";
import styles from "./headerInput.module.css";

function HeaderInput({ placeholder, onInput }) {
  return (
    <form action="#" className={styles["form-input"]}>
      <input
        type="text"
        title={placeholder}
        placeholder={placeholder}
        onInput={onInput}
        className={styles["input-find"]}
      ></input>
    </form>
  );
}

export default HeaderInput;

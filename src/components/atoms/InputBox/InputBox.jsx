import React from "react";
import styles from "./inputBox.module.css";

function LoginInput({ id, type, name }) {
  return (
    <div>
      <label htmlFor={id} className={styles[`label-login`]}>
        {name}
      </label>
      <input type={type} required id={id} className={styles["input-login"]} />
    </div>
  );
}

export default LoginInput;

import React from "react";
import styles from "./inputBox.module.css";

function InputBox({ id, type, name, placeholder, error, onChange, maxLenght }) {
  const errorClass = error ? "error" : "";
  return (
    <div>
      <label htmlFor={id} className={styles[`label-login`]}>
        {name}
      </label>
      <input
        type={type}
        required
        id={id}
        placeholder={placeholder}
        className={[styles["input-login"], styles[errorClass]].join(" ")}
        onChange={onChange}
        maxLength={maxLenght}
      />
      {error && <small className={styles["text-error"]}>{error}</small>}
    </div>
  );
}

export default InputBox;

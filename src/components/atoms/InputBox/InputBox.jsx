import React from "react";
import styles from "./inputBox.module.css";

function InputBox({
  id,
  type,
  name,
  placeholder,
  error,
  onBlur,
  onChange,
  maxLength,
  innerRef,
}) {
  const errorClass = error ? "error" : "";
  return (
    <div tabIndex="0">
      <label htmlFor={id} className={styles[`label-login`]}>
        {name}
      </label>
      <input
        type={type}
        required
        id={id}
        placeholder={placeholder}
        className={[styles["input-login"], styles[errorClass]].join(" ")}
        onBlur={onBlur}
        onChange={onChange}
        maxLength={maxLength}
        ref={innerRef}
      />
      {error && <small className={styles["text-error"]}>{error}</small>}
    </div>
  );
}

export default InputBox;

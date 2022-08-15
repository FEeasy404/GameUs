import React from "react";
import styles from "./iconButton.module.css";

function IconButton({ type, text, onClick, disabled }) {
  return (
    <button
      type="button"
      className={`${styles["button"]} ${styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="a11y-hidden">{text}</span>
    </button>
  );
}

export default IconButton;

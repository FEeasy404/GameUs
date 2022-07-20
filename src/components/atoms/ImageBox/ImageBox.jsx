import React from "react";
import styles from "./imageBox.module.css";

function ImageBox({ src, type, size, alt }) {
  return (
    <div className={`${styles["image"]} ${styles[type]} ${styles[size]}`}>
      {src && <img src={src} alt={alt} />}
    </div>
  );
}

export default ImageBox;

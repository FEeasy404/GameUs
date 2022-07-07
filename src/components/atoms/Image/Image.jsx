import React from "react";
import styles from "./image.module.css";

function Image({ src, type, size, alt }) {
  return (
    <div className={`${styles["image"]} ${styles[type]} ${styles[size]}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;

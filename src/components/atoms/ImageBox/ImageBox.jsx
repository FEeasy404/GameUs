import React from "react";
import styles from "./imageBox.module.css";

function ImageBox({ src, type, size, alt }) {
  function handleError(e) {
    e.target.src = "https://mandarin.api.weniv.co.kr/1659185236635.png";
  }
  return (
    <div className={`${styles["image"]} ${styles[type]} ${styles[size]}`}>
      {src && <img src={src} alt={alt} onError={handleError} />}
    </div>
  );
}

export default ImageBox;

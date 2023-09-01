import React from "react";
import styles from "./imageBox.module.css";
import UserImage from "../../../assets/icon-basic-profile.svg";
import NoBgImage from "../../../assets/background-no-image.svg";

function ImageBox({ src, type, size, alt }) {
  function handleError(e) {
    e.target.src = type === "circle" ? UserImage : NoBgImage;
  }

  return (
    <div className={`${styles["image"]} ${styles[type]} ${styles[size]}`}>
      {src && <img src={src} alt={alt} onError={handleError} />}
    </div>
  );
}

export default ImageBox;

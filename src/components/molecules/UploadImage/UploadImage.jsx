import React from "react";
import IconButton from "../../atoms/IconButton/IconButton";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./uploadImage.module.css";

function UploadImage({ size, item, handleDeleteBtn }) {
  return (
    <div className={`${styles["wrapper-image"]} ${styles[size]}`}>
      <ImageBox src={item.src} type="rounded_square" size={size} />
      <IconButton
        type="close"
        text="이미지 취소"
        onClick={() => handleDeleteBtn(item.key)}
      />
    </div>
  );
}

export default UploadImage;

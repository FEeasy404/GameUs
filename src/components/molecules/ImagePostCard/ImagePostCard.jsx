import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import { Link } from "react-router-dom";
import IconButton from "../../atoms/IconButton/IconButton";
import styles from "./imagePostCard.module.css";

function ImagePostCard({ post }) {
  const imageList = post.image.split(",");
  return (
    <Link to={`/post/${post.id}`} className={styles["link-image"]}>
      <ImageBox src={imageList[0]} type="square" />
      {imageList.length >= 2 && <IconButton type="image-layers" />}
    </Link>
  );
}

export default ImagePostCard;

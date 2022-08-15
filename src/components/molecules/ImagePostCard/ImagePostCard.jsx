import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../../atoms/IconButton/IconButton";
import ImageBox from "../../atoms/ImageBox/ImageBox";
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

import React from "react";
import Like from "../../atoms/Like/Like";
import Comment from "../../atoms/Comment/Comment";
import styles from "./infoIconGroup.module.css";

function InfoIconGroup({post}) {
  return (
    <div className={styles["container-icon"]}>
      <Like />
      <Comment postId={post.id} countComment={post.comment}/>
    </div>
  )
}

export default InfoIconGroup;

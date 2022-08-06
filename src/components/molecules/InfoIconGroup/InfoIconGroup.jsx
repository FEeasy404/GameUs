import React from "react";
import Like from "../../atoms/Like/Like";
import Comment from "../../atoms/Comment/Comment";
import styles from "./infoIconGroup.module.css";

function InfoIconGroup({ postId, hearted, heartCount, commentCount }) {
  return (
    <div className={styles["container-icon"]}>
      <Like postId={postId} hearted={hearted} heartCount={heartCount} />
      <Comment postId={postId} commentCount={commentCount} />
    </div>
  );
}

export default InfoIconGroup;

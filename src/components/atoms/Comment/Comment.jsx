import React from "react";
import { Link } from "react-router-dom";
import styles from "./comment.module.css";

function Comment({ postId, commentCount }) {
  return (
    <div className={styles["container-comment"]}>
      <p className="a11y-hidden">댓글</p>
      <Link to={`/post/${postId}`} className={styles["link-comment"]} />
      <span className={styles["count-comment"]}>{commentCount}</span>
    </div>
  );
}

export default Comment;

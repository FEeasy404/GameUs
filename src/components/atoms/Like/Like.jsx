import React, { useState } from "react";
import { useContext } from "react";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import styles from "./like.module.css";
import { heartPost, unheartPost } from "../../molecules/PostCard/PostCardAPI";

function Like({ postId, hearted, heartCount }) {
  const [like, setLike] = useState(hearted);
  const [countLike, setCountLike] = useState(heartCount);
  const { user } = useContext(LoginedUserContext);

  async function handleSetLike() {
    let result;
    if (like) {
      result = await unheartPost(user.token, postId);
    } else {
      result = await heartPost(user.token, postId);
    }
    setLike(result.post.hearted);
    setCountLike(countLike + (like ? -1 : 1));
  }

  return (
    <div className={styles["container-like"]}>
      <p className="a11y-hidden">좋아요</p>
      <button
        type="button"
        onClick={handleSetLike}
        className={`${styles["button-like"]} ${like && styles["liked"]}`}
      ></button>
      <span className={styles["count-like"]}>{countLike}</span>
    </div>
  );
}

export default Like;

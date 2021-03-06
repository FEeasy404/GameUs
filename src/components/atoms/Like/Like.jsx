import React, { useState } from "react";
import styles from "./like.module.css";

function Like({hearted, heartCount}) {
  const [like, setLike] = useState(hearted);
  const [countLike, setCountLike] = useState(heartCount);
  
  function handleSetLike(event) {
    setLike(!like);
    setCountLike(countLike + (like ? -1 : 1));
    event.target.classList.toggle(styles.liked);
  }

  return (
    <div className={styles["container-like"]}>
      <p className="a11y-hidden">좋아요</p>
      <button type="button" onClick={handleSetLike} className={styles["button-like"]}></button>
      <span className={styles["count-like"]}>{countLike}</span>
    </div>
  )
}

export default Like;

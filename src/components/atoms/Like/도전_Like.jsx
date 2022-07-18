import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./like.module.css";

function Like({postId, hearted, heartCount}) {
  const BASE_URL = "https://mandarin.api.weniv.co.kr";
  const REQ_PATH = `/post/:${postId}/heart`;
  const TOKEN = window.localStorage.getItem("token");

  const [like, setLike] = useState(hearted);
  const [countLike, setCountLike] = useState(heartCount);

  // 좋아요 시 
  useEffect( async () => {
    try {
        const response = fetch(BASE_URL + REQ_PATH, {
          method: "POST",
          headers: {
            "Authorization" : `Bearer ${TOKEN}`,
            "Content-type" : "application/json"
          },
        });
      } catch (error) {
        console.log(error.message);
      }
  }, [like]);
  
  function handleSetLike(event) {
    setLike(!like);
    if(like) {
      // 좋아요
      setCountLike(countLike + 1);
    }else {
      // 좋아요 취소
      setCountLike(countLike - 1);
    }
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

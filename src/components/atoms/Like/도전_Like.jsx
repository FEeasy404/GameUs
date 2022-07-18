import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./like.module.css";

// 도전과제 좋아요 기능입니다.
// 좋아요가 실제 데이터에 반영되게 만드는 것인데,
// 미완이라 동작을 안 할거에요! 나중에 더 수정하겠습니다.

function Like({postId, hearted, heartCount}) {
  const BASE_URL = "https://mandarin.api.weniv.co.kr";
  const BASE_REQ_PATH = `/post/:${postId}/`;
  const TOKEN = window.localStorage.getItem("token");

  const [like, setLike] = useState(hearted);
  const [countLike, setCountLike] = useState(heartCount);

  useEffect( async () => {
    // 좋아요 패스 = /post/:${postId}/heart
    // 좋아요 취소 패스 = /post/:${postId}/unheart
    let req_path = BASE_REQ_PATH + (like ? "heart" : "unheart");

    try {
        fetch(BASE_URL + req_path, {
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

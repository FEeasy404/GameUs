import React from "react";
import styles from "/author.module.css";

function Author({userName, userId}) {
  return (
    <div>
        <span className={styles["text-user_name"]}>{userName}</span>
        <span className={styles["text-user_id"]}>{userId}</span>
    </div>
  )
}

export default Author;
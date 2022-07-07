import React from "react";
import styles from "./userInfo.module.css";

function UserInfo({ userName, userId, userIntroduce }) {
  return (
    <div className={styles["info-wrapper"]}>
      <strong className={styles["user_name"]}>{userName}</strong>
      <p className={styles["user_id"]}>@ {userId}</p>
      <p className={styles["user_introduce"]}>{userIntroduce}</p>
    </div>
  );
}

export default UserInfo;

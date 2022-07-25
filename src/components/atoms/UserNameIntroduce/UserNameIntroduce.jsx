import React from "react";
import styles from "./userNameIntroduce.module.css";

function UserNameIntroduce({ userName, userIntroduce }) {
  return (
    <div className={styles["wrapper-user"]}>
      <strong className={styles["user_name"]}>{userName}</strong>
      <p className={styles["user_introduce"]}>{userIntroduce}</p>
    </div>
  );
}

export default UserNameIntroduce;

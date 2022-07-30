import React from "react";
import styles from "./userInfo.module.css";

function UserInfo({ username, accountname, intro }) {
  return (
    <div className={styles["info-wrapper"]}>
      <strong className={styles["user_name"]}>{username}</strong>
      <p className={styles["user_id"]}>@ {accountname}</p>
      <p className={styles["user_introduce"]} title={intro}>
        {intro}
      </p>
    </div>
  );
}

export default UserInfo;

import React from "react";
import ImageBox from "../../ImageBox/ImageBox";
import styles from "./userchat.module.css";

function UserChat({ text, date }) {
  return (
    <div className={styles["wrapper-userchat"]}>
      <ImageBox
        src="https://mandarin.api.weniv.co.kr/1658306906297.png"
        type={"circle"}
        size={"medium_small"}
      />
      <div className={styles["box-userchat"]}>
        <p className={styles["text-userchat"]}>{text}</p>
      </div>
      <span className={styles["date-userchat"]}>{date}</span>
    </div>
  );
}

export default UserChat;

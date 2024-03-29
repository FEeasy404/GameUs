import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./userchat.module.css";

function UserChat({ text, date, image }) {
  return (
    <div className={styles["wrapper-userchat"]}>
      <ImageBox
        src={image ? image : "https://mandarin.api.weniv.co.kr/1658306906297.png"}
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

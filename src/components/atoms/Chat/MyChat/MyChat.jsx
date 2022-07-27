import React from "react";
import styles from "./mychat.module.css";
import ImageBox from "../../ImageBox/ImageBox";

function MyChat({ text, image, date }) {
  return (
    <div className={styles["wrapper-mychat"]}>
      <span className={styles["date-mychat"]}>{date}</span>
      {!image ? (
        <div className={styles["mychatbox"]}>
          <p className={styles["text-mychat"]}>{text}</p>
        </div>
      ) : (
        <ImageBox src={image} type={"rounded_square"} size={"medium"} />
      )}
    </div>
  );
}

export default MyChat;

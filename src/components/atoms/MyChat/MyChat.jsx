import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./mychat.module.css";

function MyChat({ text, image, date }) {
  return (
    <div className={styles["wrapper-mychat"]}>
      <span className={styles["date-mychat"]}>{date}</span>
      {!image ? (
        <div className={styles["box-mychat"]}>
          <p className={styles["text-mychat"]}>{text}</p>
        </div>
      ) : (
        <ImageBox src={image} type={"rounded_square"} size={"medium"} />
      )}
    </div>
  );
}

export default MyChat;

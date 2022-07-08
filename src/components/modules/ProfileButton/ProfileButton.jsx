import React from "react";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import styles from "./profileButton.module.css";

function ProfileButton({ isFollowing }) {
  return (
    <div className={styles["button-wrapper"]}>
      <IconButton type="message" text="메시지 보내기" />
      <Button
        href="#"
        size="medium"
        label={isFollowing ? "언팔로우" : "팔로우"}
        active={true}
        primary={isFollowing ? false : true}
      />
      <IconButton type="share" text="공유하기" />
    </div>
  );
}

export default ProfileButton;

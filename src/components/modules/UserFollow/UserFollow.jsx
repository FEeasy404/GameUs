import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserNameIntroduce from "../../atoms/UserNameIntroduce/UserNameIntroduce";
import Button from "../../atoms/Button/Button";
import styles from "./userFollow.module.css";
import { useState } from "react";

function UserFollow({ src, userName, userIntroduce }) {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <div className={styles["follow-wrapper"]}>
      <ImageBox src={src} type="circle" size="medium" alt="프로필 이미지" />
      <UserNameIntroduce userName={userName} userIntroduce={userIntroduce} />
      <Button
        size="small"
        label={isFollowing ? "취소" : "팔로우"}
        active={true}
        primary={isFollowing ? false : true}
        onClick={() => setIsFollowing(!isFollowing)}
      />
    </div>
  );
}

export default UserFollow;

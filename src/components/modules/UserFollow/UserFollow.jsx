import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserNameIntroduce from "../../atoms/UserNameIntroduce/UserNameIntroduce";
import Button from "../../atoms/Button/Button";
import styles from "./userFollow.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserFollow({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <div className={styles["wrapper-follow"]}>
        <ImageBox
          src={user.image}
          type="circle"
          size="medium"
          alt="프로필 이미지"
        />
        <Link to={`/profile/${user.accountname}`} className={styles["wrapper-link"]}>
        <UserNameIntroduce
          userName={user.username}
          userIntroduce={user.intro}
        />
      </Link>
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

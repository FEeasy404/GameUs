import React from "react";
import NumberFollow from "../../atoms/NumberFollow/NumberFollow";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserInfo from "../../atoms/UserInfo/UserInfo";
import styles from "./userProfileBox.module.css";

function UserProfileBox({
  src,
  userName,
  userId,
  userIntroduce,
  followerCount,
  followingCount,
}) {
  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["upper-wrapper"]}>
        <NumberFollow number={followerCount} isFollower={true} />
        <ImageBox
          src={src}
          type="circle"
          size="large"
        />
        <NumberFollow number={followingCount} isFollower={false} />
      </div>
      <UserInfo
        userName={userName}
        userId={userId}
        userIntroduce={userIntroduce}
      />
    </div>
  );
}

export default UserProfileBox;

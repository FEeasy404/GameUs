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
    <div className={styles["wrapper-profile"]}>
      <h2 className="a11y-hidden">사용자 정보</h2>
      <div className={styles["wrapper-upper"]}>
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

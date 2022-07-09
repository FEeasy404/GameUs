import React from "react";
import NumberFollow from "../../atoms/NumberFollow/NumberFollow";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserInfo from "../../atoms/UserInfo/UserInfo";
import styles from "./userProfileBox.module.css";

function UserProfileBox({
  userName,
  userId,
  userIntroduce,
  followerNumber,
  followingNumber,
}) {
  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["upper-wrapper"]}>
        <NumberFollow number={followerNumber} isFollower={true} />
        <ImageBox
          src="http://www.paullab.co.kr/images/weniv-binky.png"
          type="circle"
          size="large"
        />
        <NumberFollow number={followingNumber} isFollower={false} />
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

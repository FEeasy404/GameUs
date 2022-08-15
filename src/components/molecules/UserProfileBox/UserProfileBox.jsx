import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import NumberFollow from "../../atoms/NumberFollow/NumberFollow";
import UserInfo from "../../atoms/UserInfo/UserInfo";
import styles from "./userProfileBox.module.css";

function UserProfileBox({
  image,
  username,
  accountname,
  intro,
  followerCount,
  followingCount,
}) {
  return (
    <div className={styles["wrapper-profile"]}>
      <h2 className="a11y-hidden">사용자 정보</h2>
      <div className={styles["wrapper-upper"]}>
        <NumberFollow number={followerCount} isFollower={true} />
        <ImageBox src={image} type="circle" size="large" />
        <NumberFollow number={followingCount} isFollower={false} />
      </div>
      <UserInfo username={username} accountname={accountname} intro={intro} />
    </div>
  );
}

export default UserProfileBox;

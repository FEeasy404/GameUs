import React from "react";
import { Link } from "react-router-dom";
import styles from "./numberFollow.module.css";

function NumberFollow({ number, isFollower }) {
  const classList = ["number"];
  // 팔로잉의 수를 표시할 경우에는 색을 바꾸기 위해 following이라는 클래스가 추가로 붙습니다.
  isFollower ? null : classList.push("following");
  const CLASS_LIST = classList.map((item) => styles[item]).join(" ");

  // 나중에 :accountname 추가해야 합니다.
  const followerURL = "/profile/follower";
  const followingURL = "/profile/following";

  return (
    <Link
      to={isFollower ? followerURL : followingURL}
      className={styles["wrapper"]}
    >
      <strong className={CLASS_LIST}>{number}</strong>
      <p className={styles["text"]}>
        {isFollower ? "Followers" : "Followings"}
      </p>
    </Link>
  );
}

export default NumberFollow;

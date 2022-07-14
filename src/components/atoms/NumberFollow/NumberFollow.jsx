import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./numberFollow.module.css";

function NumberFollow({ number, isFollower }) {
  const classList = ["number"];
  // 팔로잉의 수를 표시할 경우에는 색을 바꾸기 위해 following이라는 클래스가 추가로 붙습니다.
  isFollower ? null : classList.push("following");
  const CLASS_LIST = classList.map((item) => styles[item]).join(" ");

  let { accountname } = useParams();
  const followerURL = `/profile/${accountname}/follower`;
  const followingURL = `/profile/${accountname}/following`;

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

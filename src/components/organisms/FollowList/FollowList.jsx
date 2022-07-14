import React from "react";
import UserFollow from "../../modules/UserFollow/UserFollow";
import styles from "./followList.module.css";

function FollowList({ list }) {
  console.log(list);
  return list.length > 0 ? (
    <ul className={styles["list-follow"]}>
      {list.map((user) => {
        return (
          <li key={user._id}>
            <UserFollow user={user} />
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles["wrapper-message"]}>
      <p className={`${styles["emoji"]}`}>😥</p>
      <p>아직 아무도 없어요.</p>
    </div>
  );
}

export default FollowList;

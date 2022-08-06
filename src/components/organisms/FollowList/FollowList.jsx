import React from "react";
import UserFollow from "../../molecules/UserFollow/UserFollow";
import styles from "./followList.module.css";
import Logo from "../../../assets/icon-404-cat.png";

function FollowList({ list, setFollowers, setFollowings }) {
  return list.length > 0 ? (
    <ul className={styles["list-follow"]}>
      {list.map((user) => {
        return (
          <li key={user._id}>
            <UserFollow userProfile={user} setFollowers={setFollowers} setFollowings={setFollowings} />
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles["wrapper-message"]}>
      <img src={Logo} />
      <p>아직 아무도 없어요.</p>
    </div>
  );
}

export default FollowList;

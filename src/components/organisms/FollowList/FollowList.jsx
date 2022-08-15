import React from "react";
import UserFollow from "../../molecules/UserFollow/UserFollow";
import CatLogo from "../../../assets/icon-404-cat.png";
import styles from "./followList.module.css";

function FollowList({ list, setFollowers, setFollowings, setChangeFollow }) {
  return list.length > 0 ? (
    <ul className={styles["list-follow"]}>
      {list.map((user) => {
        return (
          <li key={user._id}>
            <UserFollow
              userProfile={user}
              setFollowers={setFollowers}
              setFollowings={setFollowings}
              setChangeFollow={setChangeFollow}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles["wrapper-message"]}>
      <img src={CatLogo} />
      <p>아직 아무도 없어요.</p>
    </div>
  );
}

export default FollowList;

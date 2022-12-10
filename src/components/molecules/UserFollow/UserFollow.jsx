import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserNameIntroduce from "../../atoms/UserNameIntroduce/UserNameIntroduce";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { followUser } from "../../../common/FollowUser";
import { unfollowUser } from "../../../common/UnfollowUser";
import styles from "./userFollow.module.css";

function UserFollow({ userProfile }) {
  const { user } = useContext(LoginedUserContext);
  const [isFollowing, setFollowing] = useState(userProfile.isfollow);

  async function handleSetFollow() {
    let result;
    if (isFollowing) {
      result = await unfollowUser(user.token, userProfile.accountname);
    } else {
      result = await followUser(user.token, userProfile.accountname);
    }
    setFollowing(result.profile.isfollow);
  }

  return (
    <div className={styles["wrapper-follow"]}>
      <ImageBox
        src={userProfile.image}
        type="circle"
        size="medium"
        alt="프로필 이미지"
      />
      <Link
        to={`/profile/${userProfile.accountname}`}
        className={styles["wrapper-link"]}
      >
        <UserNameIntroduce
          userName={userProfile.username}
          userIntroduce={userProfile.intro}
        />
      </Link>
      {user.accountname !== userProfile.accountname && (
        <Button
          size="small"
          label={isFollowing ? "취소" : "팔로우"}
          active={true}
          primary={isFollowing ? false : true}
          onClick={handleSetFollow}
        />
      )}
    </div>
  );
}

export default UserFollow;

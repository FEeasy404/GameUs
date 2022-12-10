import React, { useContext, useState } from "react";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { followUser } from "../../../common/FollowUser";
import { unfollowUser } from "../../../common/UnfollowUser";
import styles from "./profileButton.module.css";

function ProfileButton({ userProfile, setProfile }) {
  const { user } = useContext(LoginedUserContext);
  const [isFollow, setFollow] = useState(userProfile.isfollow);

  async function handleSetFollow() {
    let result;
    if (isFollow) {
      result = await unfollowUser(user.token, userProfile.accountname);
    } else {
      result = await followUser(user.token, userProfile.accountname);
    }
    setFollow(result.profile.isfollow);
    setProfile(result.profile);
  }

  return (
    <div className={styles["container-button"]}>
      <IconButton type="message" text="메시지 보내기" />
      <Button
        size="medium"
        label={isFollow ? "언팔로우" : "팔로우"}
        active={true}
        primary={isFollow ? false : true}
        onClick={handleSetFollow}
      />
      <IconButton type="share" text="공유하기" />
    </div>
  );
}

export default ProfileButton;

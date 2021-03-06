import React, { useContext, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import { followUser } from "../../../common/FollowUser";
import { unfollowUser } from "../../../common/UnfollowUser";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import styles from "./profileButton.module.css";
import { getProfile } from "../../../pages/ProfilePage/ProfilePageAPI";

function ProfileButton({ userProfile, setProfile }) {
  const { user } = useContext(LoginedUserContext);
  const [isFollow, setFollow] = useState(userProfile.isfollow);

  useEffect(() => {
    setFollow(userProfile.isfollow);
  }, [userProfile.isfollow]);

  return (
    <div className={styles["container-button"]}>
      <IconButton type="message" text="메시지 보내기" />
      <Button
        size="medium"
        label={isFollow ? "언팔로우" : "팔로우"}
        active={true}
        primary={isFollow ? false : true}
        onClick={() => {
          if (isFollow) {
            unfollowUser(user.token, userProfile.accountname);
          } else {
            followUser(user.token, userProfile.accountname);
          }
          getProfile(user.token, userProfile.accountname, setProfile);
        }}
      />
      <IconButton type="share" text="공유하기" />
    </div>
  );
}

export default ProfileButton;

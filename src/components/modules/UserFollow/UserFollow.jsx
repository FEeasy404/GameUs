import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserNameIntroduce from "../../atoms/UserNameIntroduce/UserNameIntroduce";
import Button from "../../atoms/Button/Button";
import styles from "./userFollow.module.css";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { followUser } from "../../../common/FollowUser";
import { unfollowUser } from "../../../common/UnfollowUser";

function UserFollow({ userProfile }) {
  const { user } = useContext(LoginedUserContext);
  const [isFollow, setFollow] = useState(userProfile.isfollow);

  useEffect(() => {
    setFollow(userProfile.isfollow);
  }, [userProfile.isfollow]);

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
          label={isFollow ? "취소" : "팔로우"}
          active={true}
          primary={isFollow ? false : true}
          onClick={() =>
            isFollow
              ? unfollowUser(user.token, userProfile.accountname)
              : followUser(user.token, userProfile.accountname)
          }
        />
      )}
    </div>
  );
}

export default UserFollow;
